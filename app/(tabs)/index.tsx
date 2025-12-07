import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons'; 

const Home = () => {
  return (
    // edges={['top']} memastikan SafeArea hanya memberi padding di atas (status bar), 
    // bagian bawah diatur oleh spacer agar tidak tertutup bottom tab.
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      
      {/* --- TOP NAV BAR SECTION --- */}
      {/* Background Cyan dengan sudut bawah melengkung */}
      <View className="px-5 pb-6 bg-[#A5F3FC] rounded-b-[30px] pt-3">
        
        {/* Judul Aplikasi */}
        <Text className="text-lg font-bold text-black mb-3">
          Event Radar UIN
        </Text>

        {/* Row: Search Bar & Notification */}
        <View className="flex-row items-center gap-4">
          
          {/* SEARCH BAR (Sesuai Spec Rectangle 2) */}
          <TouchableOpacity 
            onPress={() => router.push('/search')} 
            className="flex-1 flex-row items-center px-4 h-11"
            style={{
              backgroundColor: '#F2F2F2', // Warna sesuai spec
              borderColor: '#000000',     // Border hitam
              borderWidth: 2,             // Tebal border 2px
              borderRadius: 16,           // Radius 16px
            }}
            activeOpacity={0.8}
          >
            <Image 
              source={icons.search}
              className="w-5 h-5"
              resizeMode="contain"
              style={{ tintColor: 'black' }} 
            />
            <Text className="ml-3 text-gray-400 font-medium">Search events...</Text>
          </TouchableOpacity>

          {/* NOTIFICATION ICON */}
          <TouchableOpacity 
            onPress={() => router.push('/notification')}
            activeOpacity={0.7}
          >
            <View className="relative">
              <Image 
                source={icons.notification}
                className="w-6 h-6"
                resizeMode="contain"
                style={{ tintColor: 'black' }}
              />
              {/* Red Dot (Indikator Notifikasi) */}
              <View className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full border border-[#A5F3FC]" />
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;