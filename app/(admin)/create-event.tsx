import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, FlatList, TouchableWithoutFeedback, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
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
  const { id } = useLocalSearchParams();
  const isEditing = !!id;

  // --- STATE FORM ---
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

  // --- STATE MODAL & POPUP ---
  const [activeModal, setActiveModal] = useState<'none' | 'category' | 'eventType'>('none');
  const [showConfirmModal, setShowConfirmModal] = useState(false); // Modal Konfirmasi
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Modal Sukses

  // --- PRE-FILL DATA EDIT ---
  useEffect(() => {
    if (isEditing) {
      setForm({
        title: id === '1' ? 'Opening Ceremony' : 'Workshop UI/UX',
        category: id === '1' ? 'Seni & Budaya' : 'Sains & Teknologi',
        eventType: id === '1' ? 'Bazaar / Festival' : 'Workshop',
        startDate: '12/10/2023',
        endDate: '12/10/2023',
        startTime: id === '1' ? '09:00' : '13:00',
        endTime: id === '1' ? '12:00' : '15:00',
        location: id === '1' ? 'Aula Utama UIN SGD' : 'Lab Komputer 3',
        description: 'Event ini sedang diedit oleh admin.',
        link: 'https://uinsgd.ac.id',
        isVIP: true,
        saveWeeklyStats: true
      });
    }
  }, [id]);

  // --- HANDLER ---
  const handleSelectOption = (item: string) => {
    if (activeModal === 'category') setForm({ ...form, category: item });
    else if (activeModal === 'eventType') setForm({ ...form, eventType: item });
    setActiveModal('none');
  };

  // 1. Klik Tombol Simpan -> Validasi -> Munculkan Modal Konfirmasi
  const onSaveButtonPress = () => {
    if (!form.title || !form.startDate || !form.location || !form.category || !form.eventType) {
      // Gunakan alert biasa untuk validasi ringan, atau bisa ganti modal juga jika perlu
      alert("Data Belum Lengkap. Mohon isi data wajib."); 
      return;
    }
    setShowConfirmModal(true); // TAMPILKAN POP-UP KONFIRMASI
  };

  // 2. Klik "Ya, Simpan" di Modal -> Proses Simpan -> Munculkan Modal Sukses
  const processSave = () => {
    setShowConfirmModal(false);
    
    // Simulasi loading/saving...
    setTimeout(() => {
        setShowSuccessModal(true); // TAMPILKAN POP-UP SUKSES
    }, 300);
  };

  // 3. Tutup Modal Sukses -> Kembali ke halaman sebelumnya
  const finishAction = () => {
    setShowSuccessModal(false);
    router.back();
  };

  // Helper untuk konten modal pilihan
  const getModalContent = () => {
    if (activeModal === 'category') return { title: 'Pilih Kategori Topik', data: CATEGORIES, selected: form.category };
    if (activeModal === 'eventType') return { title: 'Pilih Jenis Event', data: EVENT_TYPES, selected: form.eventType };
    return { title: '', data: [], selected: '' };
  };
  const modalContent = getModalContent();

  const CheckboxItem = ({ label, value, onToggle }: { label: string, value: boolean, onToggle: () => void }) => (
    <TouchableOpacity onPress={onToggle} className="flex-row items-center mb-3 active:opacity-70">
      <Ionicons name={value ? "checkbox" : "square-outline"} size={24} color={value ? "#000" : "#9CA3AF"} style={{ marginRight: 10 }} />
      <Text className={`text-base font-medium ${value ? 'text-black' : 'text-gray-500'}`}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      
      {/* HEADER */}
      <View className="flex-row items-center px-5 py-4 border-b border-gray-100 bg-white z-10">
        <TouchableOpacity onPress={() => router.back()} className="mr-3 bg-gray-50 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-black">{isEditing ? "Edit Event" : "Buat Event Baru"}</Text>
      </View>

      <ScrollView className="flex-1 bg-gray-50" contentContainerStyle={{ padding: 20 }}>
        {/* Banner Upload */}
        <TouchableOpacity className="w-full h-52 bg-white rounded-2xl border-2 border-dashed border-gray-300 items-center justify-center mb-6 shadow-sm active:bg-gray-100" activeOpacity={0.7}>
            <View className="items-center">
                <View className="w-16 h-16 bg-blue-50 rounded-full items-center justify-center mb-3">
                    <Ionicons name="camera" size={32} color="#88D9E6" />
                </View>
                <Text className="text-gray-500 font-semibold">{isEditing ? "Ketuk untuk ubah banner" : "Ketuk untuk unggah banner"}</Text>
                <Text className="text-gray-400 text-xs mt-1">Format: JPG/PNG, Max 5MB</Text>
            </View>
        </TouchableOpacity>

        {/* Form Fields */}
        <View className="gap-5 mb-6">
            <View>
                <Text className="text-gray-700 font-bold mb-2 ml-1">Nama Event</Text>
                <TextInput className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black font-medium focus:border-secondary shadow-sm" placeholder="Contoh: Seminar Nasional AI 2024" placeholderTextColor="#9CA3AF" value={form.title} onChangeText={(text) => setForm({...form, title: text})} />
            </View>

            <View className="flex-row gap-3">
                <View className="flex-1">
                    <Text className="text-gray-700 font-bold mb-2 ml-1">Jenis Event</Text>
                    <TouchableOpacity onPress={() => setActiveModal('eventType')} className={`flex-row items-center justify-between bg-white border rounded-xl px-3 py-3.5 shadow-sm ${form.eventType ? 'border-secondary' : 'border-gray-200'}`}>
                      <Text numberOfLines={1} className={`flex-1 mr-1 text-sm ${form.eventType ? "text-black font-medium" : "text-gray-400"}`}>{form.eventType || "Pilih Jenis"}</Text>
                      <Ionicons name="chevron-down" size={18} color={form.eventType ? "#000" : "#9CA3AF"} />
                    </TouchableOpacity>
                </View>
                <View className="flex-1">
                    <Text className="text-gray-700 font-bold mb-2 ml-1">Kategori Topik</Text>
                    <TouchableOpacity onPress={() => setActiveModal('category')} className={`flex-row items-center justify-between bg-white border rounded-xl px-3 py-3.5 shadow-sm ${form.category ? 'border-secondary' : 'border-gray-200'}`}>
                      <Text numberOfLines={1} className={`flex-1 mr-1 text-sm ${form.category ? "text-black font-medium" : "text-gray-400"}`}>{form.category || "Pilih Topik"}</Text>
                      <Ionicons name="chevron-down" size={18} color={form.category ? "#000" : "#9CA3AF"} />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="flex-row gap-3">
                <View className="flex-1">
                    <Text className="text-gray-700 font-bold mb-2 ml-1">Tanggal Mulai</Text>
                    <TextInput className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black shadow-sm" placeholder="DD/MM/YYYY" value={form.startDate} onChangeText={(text) => setForm({...form, startDate: text})} />
                </View>
                <View className="flex-1">
                    <Text className="text-gray-700 font-bold mb-2 ml-1">Tanggal Selesai</Text>
                    <TextInput className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black shadow-sm" placeholder="DD/MM/YYYY" value={form.endDate} onChangeText={(text) => setForm({...form, endDate: text})} />
                </View>
            </View>

            <View className="flex-row gap-3">
                <View className="flex-1">
                    <Text className="text-gray-700 font-bold mb-2 ml-1">Waktu Mulai</Text>
                    <TextInput className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black shadow-sm" placeholder="08:00 WIB" value={form.startTime} onChangeText={(text) => setForm({...form, startTime: text})} />
                </View>
                <View className="flex-1">
                    <Text className="text-gray-700 font-bold mb-2 ml-1">Waktu Selesai</Text>
                    <TextInput className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black shadow-sm" placeholder="12:00 WIB" value={form.endTime} onChangeText={(text) => setForm({...form, endTime: text})} />
                </View>
            </View>

            <View>
                <Text className="text-gray-700 font-bold mb-2 ml-1">Lokasi</Text>
                <TextInput className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black shadow-sm" placeholder="Aula Utama / Zoom Meeting" value={form.location} onChangeText={(text) => setForm({...form, location: text})} />
            </View>

            <View>
                <Text className="text-gray-700 font-bold mb-2 ml-1">Deskripsi Lengkap</Text>
                <TextInput className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black h-36 shadow-sm" placeholder="Jelaskan detail acara..." multiline textAlignVertical="top" value={form.description} onChangeText={(text) => setForm({...form, description: text})} />
            </View>

            <View>
                <Text className="text-gray-700 font-bold mb-2 ml-1">Link Pendaftaran (Opsional)</Text>
                <View className="flex-row items-center bg-white border border-gray-200 rounded-xl px-4 shadow-sm">
                    <Ionicons name="link" size={20} color="#9CA3AF" style={{ marginRight: 10 }} />
                    <TextInput className="flex-1 py-3.5 text-blue-600" placeholder="https://..." value={form.link} onChangeText={(text) => setForm({...form, link: text})} autoCapitalize="none" />
                </View>
            </View>
        </View>

        <View className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-8">
            <Text className="text-gray-700 font-bold mb-3">Pengaturan Tambahan</Text>
            <CheckboxItem label="Set sebagai Event VIP (Prioritas)" value={form.isVIP} onToggle={() => setForm({...form, isVIP: !form.isVIP})} />
            <CheckboxItem label="Simpan Statistik Mingguan" value={form.saveWeeklyStats} onToggle={() => setForm({...form, saveWeeklyStats: !form.saveWeeklyStats})} />
        </View>
      </ScrollView>

      {/* FOOTER BUTTON */}
      <View className="p-5 border-t border-gray-100 bg-white">
        <TouchableOpacity onPress={onSaveButtonPress} className="w-full bg-secondary h-14 rounded-xl items-center justify-center shadow-md active:bg-cyan-300" activeOpacity={0.8}>
            <Text className="text-black font-bold text-lg">{isEditing ? "Simpan Perubahan" : "Publikasikan Event"}</Text>
        </TouchableOpacity>
      </View>

      {/* --- MODAL 1: PILIHAN (KATEGORI/JENIS) --- */}
      <Modal animationType="slide" transparent={true} visible={activeModal !== 'none'} onRequestClose={() => setActiveModal('none')}>
        <TouchableWithoutFeedback onPress={() => setActiveModal('none')}>
          <View className="flex-1 justify-end bg-black/40">
            <TouchableWithoutFeedback onPress={() => {}}>
              <View className="bg-white rounded-t-[30px] h-[55%] p-6 shadow-xl">
                <View className="flex-row justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <Text className="text-xl font-bold text-black">{modalContent.title}</Text>
                  <TouchableOpacity onPress={() => setActiveModal('none')}><Ionicons name="close-circle" size={28} color="#9CA3AF" /></TouchableOpacity>
                </View>
                <FlatList data={modalContent.data} keyExtractor={(item) => item} showsVerticalScrollIndicator={false} renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectOption(item)} className={`flex-row items-center justify-between p-4 mb-3 rounded-xl border ${modalContent.selected === item ? 'bg-secondary/10 border-secondary' : 'bg-gray-50 border-transparent'}`}>
                      <Text className={`text-base font-medium ${modalContent.selected === item ? 'text-black' : 'text-gray-600'}`}>{item}</Text>
                      {modalContent.selected === item && (<Ionicons name="checkmark-circle" size={22} color="#000" />)}
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* --- MODAL 2: KONFIRMASI SIMPAN (CUSTOM POPUP) --- */}
      <Modal animationType="fade" transparent={true} visible={showConfirmModal} onRequestClose={() => setShowConfirmModal(false)}>
        <View className="flex-1 justify-center items-center bg-black/50 px-6">
            <View className="bg-white w-full rounded-2xl p-6 items-center shadow-2xl">
                <View className="w-16 h-16 bg-blue-50 rounded-full items-center justify-center mb-4">
                    <Ionicons name="help" size={32} color="#3B82F6" />
                </View>
                <Text className="text-xl font-bold text-black mb-2 text-center">Konfirmasi</Text>
                <Text className="text-gray-500 text-center mb-6">
                    Apakah Anda yakin ingin {isEditing ? "menyimpan perubahan" : "mempublikasikan"} event ini?
                </Text>
                <View className="flex-row gap-3 w-full">
                    <TouchableOpacity onPress={() => setShowConfirmModal(false)} className="flex-1 py-3 rounded-xl bg-gray-100 border border-gray-200 items-center">
                        <Text className="text-gray-700 font-bold">Batal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={processSave} className="flex-1 py-3 rounded-xl bg-secondary items-center shadow-sm">
                        <Text className="text-black font-bold">Ya, Simpan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </Modal>

      {/* --- MODAL 3: SUKSES (CUSTOM POPUP) --- */}
      <Modal animationType="fade" transparent={true} visible={showSuccessModal} onRequestClose={finishAction}>
        <View className="flex-1 justify-center items-center bg-black/50 px-6">
            <View className="bg-white w-full rounded-2xl p-6 items-center shadow-2xl">
                <View className="w-16 h-16 bg-green-50 rounded-full items-center justify-center mb-4">
                    <Ionicons name="checkmark-sharp" size={32} color="#10B981" />
                </View>
                <Text className="text-xl font-bold text-black mb-2 text-center">Berhasil!</Text>
                <Text className="text-gray-500 text-center mb-6">
                    {isEditing ? "Perubahan data event telah disimpan." : "Event baru berhasil dibuat dan dipublikasikan."}
                </Text>
                <TouchableOpacity onPress={finishAction} className="w-full py-3.5 rounded-xl bg-secondary items-center shadow-sm">
                    <Text className="text-black font-bold">Selesai</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

export default CreateEvent;