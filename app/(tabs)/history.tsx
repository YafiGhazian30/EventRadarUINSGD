import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const History = () => {
  return (
    // edges={['top']} agar header pas di status bar
    <SafeAreaView className="flex-1 bg-secondary" edges={['top']}>
      
      {/* --- HEADER SECTION --- */}
      {/* Header sederhana: Background Primary, Sudut melengkung, Judul di tengah */}
      <View className="px-5 pb-6 bg-accent rounded-b-[16px] pt-6 shadow-sm items-center">
        <Text className="text-2xl font-bold text-black">
          Riwayat Event yang Anda Ikuti
        </Text>
      </View>

      {/* --- CONTENT SECTION --- */}
      <ScrollView 
        className="flex-1 px-5 mt-6" 
        showsVerticalScrollIndicator={false}
      >
        {/* Item History 1 (Selesai) */}
        <View className="w-full bg-gray-50 rounded-xl mb-4 p-4 border border-gray-200 flex-row">
            {/* Tanggal (Kotak Kiri) */}
            <View className="w-16 h-16 bg-gray-200 rounded-lg items-center justify-center mr-4">
                <Text className="text-lg font-bold text-gray-600">20</Text>
                <Text className="text-xs font-medium text-gray-500">SEP</Text>
            </View>
            
            {/* Detail Event */}
            <View className="flex-1 justify-center">
                <Text className="text-lg font-bold text-gray-800 mb-1" numberOfLines={1}>
                  Webinar Cyber Security
                </Text>
                <Text className="text-sm text-gray-500 mb-2">
                  Online (Zoom Meeting)
                </Text>
                {/* Status Badge */}
                <View className="self-start bg-green-100 px-2 py-1 rounded-md border border-green-200">
                  <Text className="text-xs text-green-700 font-bold">Selesai</Text>
                </View>
            </View>
        </View>

        {/* Item History 2 (Selesai) */}
        <View className="w-full bg-gray-50 rounded-xl mb-4 p-4 border border-gray-200 flex-row">
            <View className="w-16 h-16 bg-gray-200 rounded-lg items-center justify-center mr-4">
                <Text className="text-lg font-bold text-gray-600">15</Text>
                <Text className="text-xs font-medium text-gray-500">AGU</Text>
            </View>
            <View className="flex-1 justify-center">
                <Text className="text-lg font-bold text-gray-800 mb-1" numberOfLines={1}>
                  Lomba Koding Nasional
                </Text>
                <Text className="text-sm text-gray-500 mb-2">
                  Lab Terpadu UIN
                </Text>
                <View className="self-start bg-green-100 px-2 py-1 rounded-md border border-green-200">
                  <Text className="text-xs text-green-700 font-bold">Selesai</Text>
                </View>
            </View>
        </View>

        {/* Item History 3 (Dibatalkan - Contoh variasi status) */}
        <View className="w-full bg-gray-50 rounded-xl mb-4 p-4 border border-gray-200 flex-row">
            <View className="w-16 h-16 bg-red-100 rounded-lg items-center justify-center mr-4">
                <Text className="text-lg font-bold text-red-400">05</Text>
                <Text className="text-xs font-medium text-red-300">JUL</Text>
            </View>
            <View className="flex-1 justify-center">
                <Text className="text-lg font-bold text-gray-400 mb-1 line-through" numberOfLines={1}>
                  Workshop Fotografi
                </Text>
                <Text className="text-sm text-gray-400 mb-2">
                  Taman Kampus
                </Text>
                <View className="self-start bg-red-100 px-2 py-1 rounded-md border border-red-200">
                  <Text className="text-xs text-red-700 font-bold">Dibatalkan</Text>
                </View>
            </View>
        </View>

        {/* Spacer agar konten paling bawah tidak tertutup Bottom Tab */}
        <View className="h-28" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;