import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';

const AdminDashboard = () => {
  const { signOut } = useAuth();
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <Text className="text-2xl font-bold mb-4">Halaman Admin</Text>
      <Text className="text-gray-500 mb-8">(Konten Admin Belum Tersedia)</Text>
      
      <TouchableOpacity onPress={signOut} className="bg-red-500 px-6 py-3 rounded-lg">
        <Text className="text-white font-bold">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default AdminDashboard;