import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import icons from '@/constants/icons'; 

const EventDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams(); 

  return (
    <SafeAreaView className="flex-1 bg-secondary" edges={['top', 'bottom']}>
      <View className="flex-1 px-6 pt-4">
        
        {/* --- HEADER (Judul Event) --- */}
        <View className="flex-row items-center mb-6 gap-3">
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
             <Ionicons name="arrow-back" size={28} color="#374B4A" />
          </TouchableOpacity>
          
          <Text 
            className="text-2xl font-bold text-black flex-1" 
            numberOfLines={2}
          >
            Nama Event Disini
          </Text>
        </View>

        {/* --- CONTENT AREA --- */}
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 120 }} 
        >
            {/* Kotak Gambar Event */}
            <View className="w-full h-60 bg-gray-500 rounded-2xl mb-5 shadow-sm border border-black/5" />

            {/* Kartu Deskripsi */}
            <View className="bg-white rounded-[30px] p-6 min-h-[400px] shadow-sm items-center justify-center">
                <Text className="text-4xl font-bold text-black text-center leading-tight">
                    Deskripsi event
                </Text>
            </View>
        </ScrollView>

        {/* --- BOTTOM ACTION BUTTONS --- */}
        <View className="absolute bottom-8 left-6 right-6 flex-row gap-4">
            
            {/* Tombol Bookmark (Kiri - Updated dengan Icon) */}
            <TouchableOpacity 
              activeOpacity={0.8}
              className="flex-1 bg-grey h-14 rounded-xl flex-row items-center justify-center gap-2 shadow-lg"
            >
                {/* Icon Bookmark Ditambahkan Disini */}
                <Image 
                   source={icons.bookmark} 
                   className="w-5 h-5" 
                   style={{ tintColor: 'white' }} 
                   resizeMode="contain"
                 />
                <Text className="text-white font-bold text-lg">Simpan Event</Text>
            </TouchableOpacity>

            {/* Tombol Ikuti Event (Kanan) */}
            <TouchableOpacity 
              activeOpacity={0.8}
              className="flex-1 bg-accent h-14 rounded-xl flex-row items-center justify-center gap-2 shadow-lg"
            >
                 <Image 
                   source={icons.schedule} 
                   className="w-5 h-5" 
                   style={{ tintColor: 'white' }} 
                   resizeMode="contain"
                 />
                 <Text className="text-white font-bold text-lg">Ikuti Event</Text>
            </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}

export default EventDetails;