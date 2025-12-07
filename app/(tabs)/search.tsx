import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router'; // 1. Import router
import { Ionicons } from '@expo/vector-icons'; // Optional: Import icon panah

const search = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-5">Search</Text>

      {/* Tombol Kembali Manual */}
      <TouchableOpacity
        onPress={() => router.navigate('/')} // 2. Arahkan kembali ke route '/' (Home)
        className="flex-row items-center bg-gray-200 px-5 py-3 rounded-full mt-4"
      >
        {/* Ikon Panah Kiri (Optional) */}
        <Ionicons name="arrow-back" size={24} color="black" style={{ marginRight: 8 }} />
        
        <Text className="text-lg font-semibold">Kembali ke Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default search;