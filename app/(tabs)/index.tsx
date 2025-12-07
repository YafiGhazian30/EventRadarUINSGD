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
          Event Radar UIN
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
    </SafeAreaView>
  );
};

export default Home;