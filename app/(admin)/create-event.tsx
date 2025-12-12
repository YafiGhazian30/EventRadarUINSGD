import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert, Modal, FlatList, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// --- DATA KONSTANTA ---
const CATEGORIES = [
  "Sains & Teknologi", "Kajian Islam", "Seni & Budaya",
  "Olahraga", "Bisnis & Karir", "Kesehatan",
  "Politik & Hukum", "Lingkungan", "Lainnya"
];

const EVENT_TYPES = [
  "Seminar", "Kuliah Umum", "Workshop",
  "Lomba / Kompetisi", "Bazaar / Festival", "Konser Musik",
  "Webinar", "Pameran"
];

const CreateEvent = () => {
  const router = useRouter();
  
  // State Form dengan tambahan isVIP dan saveWeeklyStats
  const [form, setForm] = useState({
    title: '',
    category: '', 
    eventType: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    location: '',
    description: '',
    link: '',
    isVIP: false,
    saveWeeklyStats: false
  });

  // State Modal
  const [activeModal, setActiveModal] = useState<'none' | 'category' | 'eventType'>('none');

  const handleSubmit = () => {
    // Validasi input
    if (!form.title || !form.startDate || !form.location || !form.category || !form.eventType) {
      Alert.alert("Data Belum Lengkap", "Mohon lengkapi Judul, Jenis Event, Kategori, Tanggal, dan Lokasi.");
      return;
    }
    
    // Simulasi Submit Data
    console.log("Submitting form:", form);
    Alert.alert("Sukses", "Event berhasil dibuat!", [
      { text: "OK", onPress: () => router.back() }
    ]);
  };

  const handleSelectOption = (item: string) => {
    if (activeModal === 'category') {
      setForm({ ...form, category: item });
    } else if (activeModal === 'eventType') {
      setForm({ ...form, eventType: item });
    }
    setActiveModal('none');
  };

  const getModalContent = () => {
    if (activeModal === 'category') {
      return { title: 'Pilih Kategori Topik', data: CATEGORIES, selected: form.category };
    }
    if (activeModal === 'eventType') {
      return { title: 'Pilih Jenis Event', data: EVENT_TYPES, selected: form.eventType };
    }
    return { title: '', data: [], selected: '' };
  };

  const modalContent = getModalContent();

  // Komponen Checkbox Sederhana
  const CheckboxItem = ({ label, value, onToggle }: { label: string, value: boolean, onToggle: () => void }) => (
    <TouchableOpacity 
      onPress={onToggle}
      className="flex-row items-center mb-3 active:opacity-70"
    >
      <Ionicons 
        name={value ? "checkbox" : "square-outline"} 
        size={24} 
        color={value ? "#000" : "#9CA3AF"} // Hitam jika aktif, Abu jika mati
        style={{ marginRight: 10 }}
      />
      <Text className={`text-base font-medium ${value ? 'text-black' : 'text-gray-500'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      
      {/* --- HEADER --- */}
      <View className="flex-row items-center px-5 py-4 border-b border-gray-100 bg-white z-10">
        <TouchableOpacity onPress={() => router.back()} className="mr-3 bg-gray-50 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-black">Buat Event Baru</Text>
      </View>

      <ScrollView className="flex-1 bg-gray-50" contentContainerStyle={{ padding: 20 }}>
        
        {/* --- UPLOAD GAMBAR --- */}
        <TouchableOpacity 
          className="w-full h-52 bg-white rounded-2xl border-2 border-dashed border-gray-300 items-center justify-center mb-6 shadow-sm active:bg-gray-100"
          activeOpacity={0.7}
        >
            <View className="items-center">
                <View className="w-16 h-16 bg-blue-50 rounded-full items-center justify-center mb-3">
                    <Ionicons name="camera" size={32} color="#88D9E6" />
                </View>
                <Text className="text-gray-500 font-semibold">Ketuk untuk unggah banner</Text>
                <Text className="text-gray-400 text-xs mt-1">Format: JPG/PNG, Max 5MB</Text>
            </View>
        </TouchableOpacity>

        {/* --- FORM FIELDS --- */}
        <View className="gap-5 mb-6">
            
            {/* Input Judul */}
            <View>
                <Text className="text-gray-700 font-bold mb-2 ml-1">Nama Event</Text>
                <TextInput 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black font-medium focus:border-secondary shadow-sm"
                    placeholder="Contoh: Seminar Nasional AI 2024"
                    placeholderTextColor="#9CA3AF"
                    value={form.title}
                    onChangeText={(text) => setForm({...form, title: text})}
                />
            </View>

            {/* --- POSISI DITUKAR: Jenis Event (Kiri) | Kategori (Kanan) --- */}
            <View className="flex-row gap-3">
                {/* Jenis Event */}
                <View className="flex-1">
                    <Text className="text-gray-700 font-bold mb-2 ml-1">Jenis Event</Text>
                    <TouchableOpacity 
                      onPress={() => setActiveModal('eventType')}
                      className={`flex-row items-center justify-between bg-white border rounded-xl px-3 py-3.5 shadow-sm ${form.eventType ? 'border-secondary' : 'border-gray-200'}`}
                    >
                      <Text numberOfLines={1} className={`flex-1 mr-1 text-sm ${form.eventType ? "text-black font-medium" : "text-gray-400"}`}>
                        {form.eventType || "Pilih Jenis"}
                      </Text>
                      <Ionicons name="chevron-down" size={18} color={form.eventType ? "#000" : "#9CA3AF"} />
                    </TouchableOpacity>
                </View>

                {/* Kategori */}
                <View className="flex-1">
                    <Text className="text-gray-700 font-bold mb-2 ml-1">Kategori Topik</Text>
                    <TouchableOpacity 
                      onPress={() => setActiveModal('category')}
                      className={`flex-row items-center justify-between bg-white border rounded-xl px-3 py-3.5 shadow-sm ${form.category ? 'border-secondary' : 'border-gray-200'}`}
                    >
                      <Text numberOfLines={1} className={`flex-1 mr-1 text-sm ${form.category ? "text-black font-medium" : "text-gray-400"}`}>
                        {form.category || "Pilih Topik"}
                      </Text>
                      <Ionicons name="chevron-down" size={18} color={form.category ? "#000" : "#9CA3AF"} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* --- SECTION TANGGAL --- */}
            <View className="flex-row gap-3">
                <View className="flex-1">
                    <Text className="text-gray-700 font-bold mb-2 ml-1">Tanggal Mulai</Text>
                    <TextInput 
                        className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black shadow-sm"
                        placeholder="DD/MM/YYYY"
                        value={form.startDate}
                        onChangeText={(text) => setForm({...form, startDate: text})}
                    />
                </View>
                <View className="flex-1">
                    <Text className="text-gray-700 font-bold mb-2 ml-1">Tanggal Selesai</Text>
                    <TextInput 
                        className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black shadow-sm"
                        placeholder="DD/MM/YYYY"
                        value={form.endDate}
                        onChangeText={(text) => setForm({...form, endDate: text})}
                    />
                </View>
            </View>

            {/* --- SECTION WAKTU --- */}
            <View className="flex-row gap-3">
                <View className="flex-1">
                    <Text className="text-gray-700 font-bold mb-2 ml-1">Waktu Mulai</Text>
                    <TextInput 
                        className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black shadow-sm"
                        placeholder="08:00 WIB"
                        value={form.startTime}
                        onChangeText={(text) => setForm({...form, startTime: text})}
                    />
                </View>
                <View className="flex-1">
                    <Text className="text-gray-700 font-bold mb-2 ml-1">Waktu Selesai</Text>
                    <TextInput 
                        className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black shadow-sm"
                        placeholder="12:00 WIB"
                        value={form.endTime}
                        onChangeText={(text) => setForm({...form, endTime: text})}
                    />
                </View>
            </View>

            {/* Input Lokasi */}
            <View>
                <Text className="text-gray-700 font-bold mb-2 ml-1">Lokasi</Text>
                <TextInput 
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black shadow-sm"
                    placeholder="Aula Utama / Zoom Meeting"
                    value={form.location}
                    onChangeText={(text) => setForm({...form, location: text})}
                />
            </View>

            {/* Input Deskripsi */}
            <View>
                <Text className="text-gray-700 font-bold mb-2 ml-1">Deskripsi Lengkap</Text>
                <TextInput 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black h-36 shadow-sm"
                    placeholder="Jelaskan detail acara, pembicara, dan benefit..."
                    multiline
                    textAlignVertical="top"
                    value={form.description}
                    onChangeText={(text) => setForm({...form, description: text})}
                />
            </View>

            {/* Input Link Pendaftaran */}
            <View>
                <Text className="text-gray-700 font-bold mb-2 ml-1">Link Pendaftaran (Opsional)</Text>
                <View className="flex-row items-center bg-white border border-gray-200 rounded-xl px-4 shadow-sm">
                    <Ionicons name="link" size={20} color="#9CA3AF" style={{ marginRight: 10 }} />
                    <TextInput 
                        className="flex-1 py-3.5 text-blue-600"
                        placeholder="https://..."
                        value={form.link}
                        onChangeText={(text) => setForm({...form, link: text})}
                        autoCapitalize="none"
                    />
                </View>
            </View>
        </View>

        {/* --- ADDITIONAL SETTINGS (VIP & STATS) --- */}
        <View className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-8">
            <Text className="text-gray-700 font-bold mb-3">Pengaturan Tambahan</Text>
            
            <CheckboxItem 
                label="Set sebagai Event VIP (Prioritas)" 
                value={form.isVIP} 
                onToggle={() => setForm({...form, isVIP: !form.isVIP})}
            />
            
            <CheckboxItem 
                label="Simpan Statistik Mingguan" 
                value={form.saveWeeklyStats} 
                onToggle={() => setForm({...form, saveWeeklyStats: !form.saveWeeklyStats})}
            />
        </View>

      </ScrollView>

      {/* --- FOOTER BUTTON --- */}
      <View className="p-5 border-t border-gray-100 bg-white">
        <TouchableOpacity 
            onPress={handleSubmit}
            className="w-full bg-secondary h-14 rounded-xl items-center justify-center shadow-md active:bg-cyan-300"
            activeOpacity={0.8}
        >
            <Text className="text-black font-bold text-lg">Publikasikan Event</Text>
        </TouchableOpacity>
      </View>

      {/* --- MODAL POPUP --- */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={activeModal !== 'none'}
        onRequestClose={() => setActiveModal('none')}
      >
        <TouchableWithoutFeedback onPress={() => setActiveModal('none')}>
          <View className="flex-1 justify-end bg-black/40">
            <TouchableWithoutFeedback onPress={() => {}}>
              <View className="bg-white rounded-t-[30px] h-[55%] p-6 shadow-xl">
                
                <View className="flex-row justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <Text className="text-xl font-bold text-black">{modalContent.title}</Text>
                  <TouchableOpacity onPress={() => setActiveModal('none')}>
                    <Ionicons name="close-circle" size={28} color="#9CA3AF" />
                  </TouchableOpacity>
                </View>

                <FlatList 
                  data={modalContent.data}
                  keyExtractor={(item) => item}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity 
                      onPress={() => handleSelectOption(item)}
                      className={`flex-row items-center justify-between p-4 mb-3 rounded-xl border 
                        ${modalContent.selected === item ? 'bg-secondary/10 border-secondary' : 'bg-gray-50 border-transparent'}`}
                    >
                      <Text className={`text-base font-medium ${modalContent.selected === item ? 'text-black' : 'text-gray-600'}`}>
                        {item}
                      </Text>
                      {modalContent.selected === item && (
                        <Ionicons name="checkmark-circle" size={22} color="#000" />
                      )}
                    </TouchableOpacity>
                  )}
                />
                
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      
    </SafeAreaView>
  );
};

export default CreateEvent;