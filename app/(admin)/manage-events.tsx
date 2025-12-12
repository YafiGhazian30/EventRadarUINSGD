import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ManageEvents = () => {
  const router = useRouter();

  // --- STATE ---
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [statsModalVisible, setStatsModalVisible] = useState(false); // State untuk Modal Statistik
  const [selectedEvent, setSelectedEvent] = useState<{id: number, title: string} | null>(null);

  // --- HANDLERS ---
  const handleEdit = (id: number) => {
    router.push({
      pathname: '/(admin)/create-event',
      params: { id: id }
    });
  };

  const onDeletePress = (id: number, title: string) => {
    setSelectedEvent({ id, title });
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    console.log(`Menghapus event ID ${selectedEvent?.id}: ${selectedEvent?.title}`);
    setDeleteModalVisible(false);
    setSelectedEvent(null);
  };

  // Handler Baru: Tampilkan Statistik
  const onStatsPress = (id: number, title: string) => {
    setSelectedEvent({ id, title });
    setStatsModalVisible(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      
      {/* --- HEADER --- */}
      <View className="px-5 pb-6 bg-secondary rounded-b-[16px] pt-4 shadow-sm flex-row items-center justify-between">
        <TouchableOpacity onPress={() => router.back()} className="bg-white/20 p-2 rounded-full">
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-black flex-1 text-center mr-10">
          Kelola Event
        </Text>
      </View>

      {/* --- CONTENT --- */}
      <ScrollView className="flex-1 px-5 mt-6" showsVerticalScrollIndicator={false}>
        
        {/* Section: Hari Ini */}
        <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-black">Hari Ini, 12 Okt 2023</Text>
            <View className="bg-green-100 px-3 py-1 rounded-full">
                <Text className="text-green-700 text-xs font-bold">2 Aktif</Text>
            </View>
        </View>

        {/* Item 1 */}
        <View className="w-full bg-white border border-gray-200 rounded-xl p-4 flex-row shadow-sm mb-4">
            <View className="mr-4 items-center justify-center border-r border-gray-200 pr-4 w-16">
                <Text className="text-lg font-bold text-grey">09:00</Text>
                <Text className="text-xs text-gray-500">AM</Text>
            </View>
            <View className="flex-1 justify-center mr-2">
                <Text className="text-lg font-bold text-black mb-1" numberOfLines={1}>Opening Ceremony</Text>
                <Text className="text-sm text-gray-500 mb-2" numberOfLines={1}>Aula Utama UIN SGD</Text>
                <View className="self-start bg-blue-50 px-2 py-1 rounded-md border border-blue-100">
                  <Text className="text-xs text-blue-600 font-medium">Umum</Text>
                </View>
            </View>
            {/* Action Buttons */}
            <View className="justify-center gap-2 border-l border-gray-100 pl-3">
                <TouchableOpacity onPress={() => onStatsPress(1, 'Opening Ceremony')} className="w-8 h-8 bg-orange-50 rounded-lg items-center justify-center border border-orange-100 active:bg-orange-100">
                    <Ionicons name="stats-chart" size={16} color="#F59E0B" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleEdit(1)} className="w-8 h-8 bg-blue-50 rounded-lg items-center justify-center border border-blue-100 active:bg-blue-100">
                    <Ionicons name="pencil" size={16} color="#2563EB" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDeletePress(1, 'Opening Ceremony')} className="w-8 h-8 bg-red-50 rounded-lg items-center justify-center border border-red-100 active:bg-red-100">
                    <Ionicons name="trash" size={16} color="#DC2626" />
                </TouchableOpacity>
            </View>
        </View>

        {/* Item 2 */}
        <View className="w-full bg-white border border-gray-200 rounded-xl p-4 flex-row shadow-sm mb-4">
            <View className="mr-4 items-center justify-center border-r border-gray-200 pr-4 w-16">
                <Text className="text-lg font-bold text-grey">13:00</Text>
                <Text className="text-xs text-gray-500">PM</Text>
            </View>
            <View className="flex-1 justify-center mr-2">
                <Text className="text-lg font-bold text-black mb-1" numberOfLines={1}>Workshop UI/UX</Text>
                <Text className="text-sm text-gray-500 mb-2" numberOfLines={1}>Lab Komputer 3</Text>
                <View className="self-start bg-purple-50 px-2 py-1 rounded-md border border-purple-100">
                  <Text className="text-xs text-purple-600 font-medium">Teknologi</Text>
                </View>
            </View>
            <View className="justify-center gap-2 border-l border-gray-100 pl-3">
                <TouchableOpacity onPress={() => onStatsPress(2, 'Workshop UI/UX')} className="w-8 h-8 bg-orange-50 rounded-lg items-center justify-center border border-orange-100 active:bg-orange-100">
                    <Ionicons name="stats-chart" size={16} color="#F59E0B" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleEdit(2)} className="w-8 h-8 bg-blue-50 rounded-lg items-center justify-center border border-blue-100 active:bg-blue-100">
                    <Ionicons name="pencil" size={16} color="#2563EB" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDeletePress(2, 'Workshop UI/UX')} className="w-8 h-8 bg-red-50 rounded-lg items-center justify-center border border-red-100 active:bg-red-100">
                    <Ionicons name="trash" size={16} color="#DC2626" />
                </TouchableOpacity>
            </View>
        </View>

        {/* Section: Akan Datang */}
        <View className="flex-row items-center justify-between mb-4 mt-2">
            <Text className="text-lg font-bold text-black">Akan Datang</Text>
        </View>

        {/* Item 3 */}
        <View className="w-full bg-white border border-gray-200 rounded-xl p-4 flex-row shadow-sm mb-4">
            <View className="mr-4 items-center justify-center border-r border-gray-200 pr-4 w-16">
                <Text className="text-lg font-bold text-grey">08:00</Text>
                <Text className="text-xs text-gray-500">AM</Text>
            </View>
            <View className="flex-1 justify-center mr-2">
                <Text className="text-lg font-bold text-black mb-1" numberOfLines={1}>Seminar Bisnis</Text>
                <Text className="text-sm text-gray-500 mb-2" numberOfLines={1}>Gedung Anwar M.</Text>
                <View className="self-start bg-orange-50 px-2 py-1 rounded-md border border-orange-100">
                  <Text className="text-xs text-orange-600 font-medium">Bisnis</Text>
                </View>
            </View>
            <View className="justify-center gap-2 border-l border-gray-100 pl-3">
                <TouchableOpacity onPress={() => onStatsPress(3, 'Seminar Bisnis')} className="w-8 h-8 bg-orange-50 rounded-lg items-center justify-center border border-orange-100 active:bg-orange-100">
                    <Ionicons name="stats-chart" size={16} color="#F59E0B" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleEdit(3)} className="w-8 h-8 bg-blue-50 rounded-lg items-center justify-center border border-blue-100 active:bg-blue-100">
                    <Ionicons name="pencil" size={16} color="#2563EB" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDeletePress(3, 'Seminar Bisnis')} className="w-8 h-8 bg-red-50 rounded-lg items-center justify-center border border-red-100 active:bg-red-100">
                    <Ionicons name="trash" size={16} color="#DC2626" />
                </TouchableOpacity>
            </View>
        </View>
        
        <View className="h-10" />
      </ScrollView>
      
      {/* Floating Action Button */}
      <TouchableOpacity 
        onPress={() => router.push('/(admin)/create-event')}
        className="absolute bottom-6 right-6 w-14 h-14 bg-secondary rounded-full items-center justify-center shadow-lg"
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={30} color="black" />
      </TouchableOpacity>

      {/* --- MODAL 1: KONFIRMASI HAPUS --- */}
      <Modal animationType="fade" transparent={true} visible={deleteModalVisible} onRequestClose={() => setDeleteModalVisible(false)}>
        <View className="flex-1 justify-center items-center bg-black/50 px-6">
            <View className="bg-white w-full rounded-2xl p-6 items-center shadow-2xl">
                <View className="w-16 h-16 bg-red-50 rounded-full items-center justify-center mb-4 border border-red-100">
                    <Ionicons name="trash-outline" size={32} color="#DC2626" />
                </View>
                <Text className="text-xl font-bold text-black mb-2 text-center">Hapus Event?</Text>
                <Text className="text-gray-500 text-center mb-6 px-2">Apakah Anda yakin ingin menghapus event <Text className="font-bold text-black">"{selectedEvent?.title}"</Text>?</Text>
                <View className="flex-row gap-3 w-full">
                    <TouchableOpacity onPress={() => setDeleteModalVisible(false)} className="flex-1 py-3 rounded-xl bg-gray-100 border border-gray-200 items-center">
                        <Text className="text-gray-700 font-bold">Batal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={confirmDelete} className="flex-1 py-3 rounded-xl bg-red-600 items-center shadow-sm">
                        <Text className="text-white font-bold">Hapus</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </Modal>

      {/* --- MODAL 2: STATISTIK EVENT (Tampilan Kartu Chat) --- */}
      <Modal animationType="slide" transparent={true} visible={statsModalVisible} onRequestClose={() => setStatsModalVisible(false)}>
        <View className="flex-1 justify-end bg-black/50">
            <TouchableOpacity className="flex-1" onPress={() => setStatsModalVisible(false)} />
            
            <View className="bg-white rounded-t-[30px] p-6 pb-10 shadow-xl">
                {/* Header Modal */}
                <View className="flex-row justify-between items-center mb-6">
                    <View>
                        <Text className="text-xs text-gray-400">Statistik Performa</Text>
                        <Text className="text-xl font-bold text-black">{selectedEvent?.title}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setStatsModalVisible(false)} className="bg-gray-100 p-2 rounded-full">
                        <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                {/* --- KARTU STATISTIK (Style Ungu dari Chat) --- */}
                <View className="bg-[#6200EE] rounded-2xl p-5 shadow-lg overflow-hidden w-full">
                    
                    {/* Visualisasi Grafik Dummy */}
                    <View className="h-32 mb-4 flex-row items-end justify-between px-4 pb-2 border-l-4 border-b-4 border-white/80">
                        {/* Bar 1 */}
                        <View className="items-center gap-1"><View className="w-3 h-3 bg-white rounded-full" /><View className="w-3 h-10 bg-gray-300 rounded-t-sm" /></View>
                        {/* Bar 2 */}
                        <View className="items-center gap-1"><View className="w-3 h-3 bg-white rounded-full" /><View className="w-3 h-16 bg-gray-300 rounded-t-sm" /></View>
                        {/* Bar 3 */}
                        <View className="items-center gap-1"><View className="w-3 h-3 bg-white rounded-full" /><View className="w-3 h-12 bg-gray-300 rounded-t-sm" /></View>
                        {/* Bar 4 */}
                        <View className="items-center gap-1"><View className="w-3 h-3 bg-white rounded-full" /><View className="w-3 h-20 bg-gray-300 rounded-t-sm" /></View>
                    </View>
                    
                    <Text className="text-white text-center font-bold text-sm mb-4">Detail Interaksi User</Text>
                    
                    {/* List Data */}
                    <View className="gap-2">
                        <View className="bg-[#7F39FB] p-3 rounded-xl border-b border-white/20 flex-row justify-between items-center">
                            <Text className="text-white font-medium">🔖 Bookmark</Text>
                            <Text className="text-white font-bold text-lg">24</Text>
                        </View>
                        <View className="bg-[#7F39FB] p-3 rounded-xl border-b border-white/20 flex-row justify-between items-center">
                            <Text className="text-white font-medium">🔔 Notifikasi Aktif</Text>
                            <Text className="text-white font-bold text-lg">56</Text>
                        </View>
                        <View className="bg-[#7F39FB] p-3 rounded-xl border-b border-white/20 flex-row justify-between items-center">
                            <Text className="text-white font-medium">👆 Klik Tautan</Text>
                            <Text className="text-white font-bold text-lg">112</Text>
                        </View>
                    </View>
                </View>
                {/* ----------------------------------------------- */}

            </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

export default ManageEvents;