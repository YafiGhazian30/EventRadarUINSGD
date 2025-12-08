import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const Search = () => {
  const [query, setQuery] = useState('');

  return (
    // edges={['top']} agar header menyentuh status bar
    <SafeAreaView className="flex-1 bg-primary" edges={['top']}>
      
      {/* --- HEADER SECTION --- */}
      <View className="px-5 pb-6 bg-secondary rounded-b-[16px] pt-3 shadow-sm">
        
        {/* Judul Halaman */}
        <Text className="text-lg font-bold text-black mb-3">
          Pencarian Event
        </Text>

        <View className="flex-row items-center gap-4">
          
          {/* SEARCH INPUT */}
          <View 
            className="flex-1 flex-row items-center px-4 h-11 bg-[#F2F2F2] border-2 border-border rounded-[16px]"
          >
            <Image 
              source={icons.search}
              className="w-5 h-5"
              resizeMode="contain"
              style={{ tintColor: 'black' }} 
            />
            
            {/* TextInput dengan perbaikan posisi teks */}
            <TextInput 
              // Tambahkan 'py-0' untuk menghapus padding bawaan
              className="flex-1 ml-3 text-black font-medium h-full py-0"
              placeholder="Search events..."
              placeholderTextColor="#9CA3AF"
              value={query}
              onChangeText={setQuery}
              autoFocus={true} 
              // Properti penting agar teks vertikal pas di tengah (khusus Android)
              textAlignVertical="center"
            />
          </View>

          {/* TOMBOL CANCEL (Navigasi ke Index) */}
          <TouchableOpacity 
            onPress={() => router.navigate('/')} // Mengarah langsung ke root/index
            activeOpacity={0.7}
          >
            <Text className="text-icon font-bold text-base">Batal</Text>
          </TouchableOpacity>

        </View>
      </View>

      {/* --- CONTENT SECTION --- */}
      <ScrollView 
        className="flex-1 px-5 mt-6" 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Konten Sementara / Hasil Pencarian */}
        {query.length === 0 ? (
          <View className="items-center justify-center mt-20 opacity-50">
            <Image 
              source={icons.search} 
              className="w-16 h-16 mb-4 tint-lightgrey"
              style={{ tintColor: '#D1D5DB' }}
            />
            <Text className="text-gray-400 font-medium">Type to search events...</Text>
          </View>
        ) : (
          <View>
            <Text className="text-base font-bold text-black mb-4">Results for "{query}"</Text>
            {/* Dummy Result Item */}
            <View className="w-full h-24 bg-secondary rounded-xl mb-3 flex-row p-3 border border-gray-100">
                <View className="w-16 h-16 bg-white/40 rounded-lg mr-3" />
                <View className="flex-1 justify-center">
                    <Text className="font-bold text-black mb-1">Hasil Pencarian 1</Text>
                    <Text className="text-xs text-gray-700">Deskripsi singkat event...</Text>
                </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;