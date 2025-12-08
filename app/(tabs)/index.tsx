import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons'; 

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary" edges={['top']}>
      
      {/* --- TOP NAV BAR SECTION --- */}
      <View className="px-5 pb-6 bg-secondary rounded-b-[16px] pt-3">
        
        <Text className="text-lg font-bold text-black mb-3">
          Event Radar UIN SGD
        </Text>

        <View className="flex-row items-center gap-4">
          
          {/* SEARCH BAR */}
          <TouchableOpacity 
            onPress={() => router.push('/search')} 
            className="flex-1 flex-row items-center px-4 h-11 bg-[#F2F2F2] border-2 border-black rounded-[16px]"
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
                style={{ tintColor: '#21194E' }}
              />
              {/* Red Dot */}
              <View className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full border border-primary" />
            </View>
          </TouchableOpacity>

        </View>
      </View>

      {/* --- CONTENT SECTION (Dummy Content Sesuai Gambar) --- */}
      <ScrollView className="flex-1 px-5 mt-6" showsVerticalScrollIndicator={false}>
        
        {/* Slider / Banner Placeholder */}
        <View className="w-full h-48 bg-gray-500 rounded-xl mb-6" />

        {/* Categorized Section */}
        <Text className="text-base font-bold text-black mb-3">
          Categorized for you!
        </Text>
        
        <View className="flex-row flex-wrap justify-between">
          <View className="w-[48%] h-28 bg-[#98E2F1] rounded-lg mb-4" />
          <View className="w-[48%] h-28 bg-[#98E2F1] rounded-lg mb-4" />
          <View className="w-[48%] h-28 bg-[#98E2F1] rounded-lg mb-4" />
          <View className="w-[48%] h-28 bg-[#98E2F1] rounded-lg mb-4" />
        </View>

        {/* Popular Near You */}
        <Text className="text-base font-bold text-black mb-3">
          Popular Near You
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
            <View className="w-32 h-32 bg-[#98E2F1] rounded-lg mr-4" />
            <View className="w-32 h-32 bg-[#98E2F1] rounded-lg mr-4" />
            <View className="w-32 h-32 bg-[#98E2F1] rounded-lg mr-4" />
        </ScrollView>

        {/* Spacer agar konten paling bawah tidak tertutup Bottom Tab yang floating */}
        <View className="h-28" /> 
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;