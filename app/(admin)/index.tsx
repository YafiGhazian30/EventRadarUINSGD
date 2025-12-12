import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const AdminDashboard = () => {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Logout", "Keluar dari sesi Admin?", [
      { text: "Batal", style: "cancel" },
      { 
        text: "Keluar", 
        style: "destructive", 
        onPress: () => { 
          signOut(); 
          router.replace('/login'); 
        } 
      }
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      
      {/* --- HEADER SECTION --- */}
      <View className="bg-secondary px-6 pb-8 pt-4 rounded-b-[30px] shadow-sm">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-grey font-medium text-lg">Selamat Datang,</Text>
            <Text className="text-black font-bold text-2xl">Administrator</Text>
          </View>
          <TouchableOpacity 
            onPress={handleLogout} 
            className="bg-white/30 p-2 rounded-full"
            activeOpacity={0.7}
          >
            <Ionicons name="log-out-outline" size={24} color="#374B4A" />
          </TouchableOpacity>
        </View>
        
        {/* Quick Stats */}
        <View className="flex-row mt-6 gap-3">
            <View className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 items-center">
                <Text className="text-3xl font-bold text-accent">24</Text>
                <Text className="text-xs text-gray-500 text-center mt-1">Event Aktif</Text>
            </View>
            <View className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 items-center">
                <Text className="text-3xl font-bold text-orange-500">5</Text>
                <Text className="text-xs text-gray-500 text-center mt-1">Pending</Text>
            </View>
            <View className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 items-center">
                <Text className="text-3xl font-bold text-blue-500">1.2k</Text>
                <Text className="text-xs text-gray-500 text-center mt-1">Peserta</Text>
            </View>
        </View>
      </View>

      {/* --- MAIN CONTENT --- */}
      <ScrollView className="flex-1 px-6 mt-6" showsVerticalScrollIndicator={false}>
        
        {/* Menu Grid */}
        <Text className="text-lg font-bold text-black mb-4">Menu Utama</Text>
        
        <View className="flex-row flex-wrap justify-between gap-y-4">
            
            {/* Menu Item 1: Tambah Event */}
            <TouchableOpacity 
              className="w-[48%] bg-white p-5 rounded-2xl shadow-sm border border-gray-100 items-center gap-3" 
              activeOpacity={0.7}
              onPress={() => router.push('/(admin)/create-event')} 
            >
                <View className="w-14 h-14 bg-blue-50 rounded-full items-center justify-center">
                    <Ionicons name="add-circle" size={32} color="#3B82F6" />
                </View>
                <Text className="font-bold text-gray-800 text-center">Buat Event</Text>
            </TouchableOpacity>

            {/* Menu Item 2: Kelola Event */}
            <TouchableOpacity 
              className="w-[48%] bg-white p-5 rounded-2xl shadow-sm border border-gray-100 items-center gap-3" 
              activeOpacity={0.7}
              onPress={() => router.push('/(admin)/manage-events')}
            >
                <View className="w-14 h-14 bg-purple-50 rounded-full items-center justify-center">
                    <Ionicons name="list" size={30} color="#8B5CF6" />
                </View>
                <Text className="font-bold text-gray-800 text-center">Kelola Event</Text>
            </TouchableOpacity>

            {/* Menu Item 3: Validasi Peserta (Placeholder) */}
            <TouchableOpacity 
              className="w-[48%] bg-white p-5 rounded-2xl shadow-sm border border-gray-100 items-center gap-3" 
              activeOpacity={0.7}
              onPress={() => Alert.alert("Fitur", "Halaman Validasi Peserta belum dibuat.")}
            >
                <View className="w-14 h-14 bg-green-50 rounded-full items-center justify-center">
                    <Ionicons name="checkmark-done-circle" size={30} color="#10B981" />
                </View>
                <Text className="font-bold text-gray-800 text-center">Validasi Peserta</Text>
            </TouchableOpacity>

            {/* Menu Item 4: Laporan (Placeholder) */}
            <TouchableOpacity 
              className="w-[48%] bg-white p-5 rounded-2xl shadow-sm border border-gray-100 items-center gap-3" 
              activeOpacity={0.7}
              onPress={() => Alert.alert("Fitur", "Halaman Laporan belum dibuat.")}
            >
                <View className="w-14 h-14 bg-orange-50 rounded-full items-center justify-center">
                    <Ionicons name="stats-chart" size={30} color="#F59E0B" />
                </View>
                <Text className="font-bold text-gray-800 text-center">Laporan</Text>
            </TouchableOpacity>
        </View>

        {/* Recent Activity Section */}
        <Text className="text-lg font-bold text-black mb-3 mt-8">Aktivitas Terbaru</Text>
        <View className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm mb-6">
            <View className="flex-row items-center border-b border-gray-100 pb-3 mb-3">
                <View className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                <Text className="flex-1 text-gray-600 text-sm">Event "Seminar AI" telah disetujui</Text>
                <Text className="text-xs text-gray-400">2m lalu</Text>
            </View>
            <View className="flex-row items-center border-b border-gray-100 pb-3 mb-3">
                <View className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                <Text className="flex-1 text-gray-600 text-sm">Pendaftaran baru: Ahmad (Teknik)</Text>
                <Text className="text-xs text-gray-400">15m lalu</Text>
            </View>
            <View className="flex-row items-center">
                <View className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                <Text className="flex-1 text-gray-600 text-sm">Pengajuan event "Workshop UI/UX" masuk</Text>
                <Text className="text-xs text-gray-400">1j lalu</Text>
            </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default AdminDashboard;