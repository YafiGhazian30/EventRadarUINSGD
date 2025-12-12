import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons'; 

const Home = () => {
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const goToDetail = () => router.push('/events/1');

  // Dummy Data untuk Notifikasi (Multipel)
  const reminders = [
    {
      id: 1,
      title: "Webinar Cyber Security",
      time: "10:00 - 12:00",
      status: "30 menit lagi",
      color: "#88D9E6", // Secondary (Cyan)
    },
    {
      id: 2,
      title: "Mentoring React Native",
      time: "13:00 - 15:00",
      status: "Siang ini",
      color: "#FF8E01", // Orange
    },
    {
      id: 3,
      title: "Pengumpulan Tugas Akhir",
      time: "Besok, 23:59",
      status: "Besok",
      color: "#FF6B6B", // Red
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-primary" edges={['top']}>
      
      {/* --- HEADER SECTION --- */}
      <View className="px-5 pb-6 bg-secondary rounded-b-[16px] pt-3 shadow-sm">
        
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
            onPress={() => setNotificationVisible(true)}
            activeOpacity={0.7}
          >
            <View className="relative">
              <Image 
                source={icons.notification}
                className="w-6 h-6"
                resizeMode="contain"
                style={{ tintColor: '#21194E' }}
              />
              <View className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full border border-primary" />
            </View>
          </TouchableOpacity>

        </View>
      </View>

      {/* --- POPUP NOTIFIKASI (MODEL LIST GOOGLE CALENDAR) --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isNotificationVisible}
        onRequestClose={() => setNotificationVisible(false)}
      >
        <View className="flex-1 bg-black/40 justify-center items-center px-6">
            
            {/* Container Popup */}
            <View className="bg-white w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden">
                
                {/* Header Popup */}
                <View className="px-5 py-4 border-b border-gray-100 flex-row items-center justify-between bg-gray-50">
                    <View className="flex-row items-center gap-2">
                         <Image 
                            source={icons.reminder} 
                            className="w-5 h-5"
                            style={{ tintColor: '#374B4A' }} 
                            resizeMode="contain"
                        />
                        <Text className="text-lg font-bold text-gray-800">Pengingat Jadwal</Text>
                    </View>
                    <Text className="text-xs text-gray-400">{reminders.length} Event</Text>
                </View>

                {/* List Notifikasi */}
                <View className="p-2">
                    {reminders.map((item, index) => (
                        <TouchableOpacity 
                            key={item.id}
                            onPress={() => {
                                setNotificationVisible(false); // Tutup popup
                                goToDetail(); // Pindah ke detail (opsional)
                            }}
                            activeOpacity={0.7}
                            className={`flex-row p-3 rounded-xl mb-1 ${index !== reminders.length - 1 ? 'border-b border-gray-50' : ''}`}
                        >
                            {/* Color Strip (Penanda Warna ala Kalender) */}
                            <View 
                                className="w-1.5 h-full rounded-full mr-3" 
                                style={{ backgroundColor: item.color }} 
                            />
                            
                            {/* Konten */}
                            <View className="flex-1 justify-center">
                                <Text className="text-base font-bold text-black mb-0.5" numberOfLines={1}>
                                    {item.title}
                                </Text>
                                <View className="flex-row items-center">
                                    <Text className="text-xs text-gray-500 font-medium mr-2">
                                        {item.time}
                                    </Text>
                                    <View className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">
                                        <Text className="text-[10px] text-gray-600 font-semibold">{item.status}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Footer (Tombol Tutup) */}
                <TouchableOpacity 
                    onPress={() => setNotificationVisible(false)}
                    className="bg-white border-t border-gray-100 p-4 items-center active:bg-gray-50"
                >
                    <Text className="text-blue-600 font-semibold text-base">Tutup</Text>
                </TouchableOpacity>

            </View>
        </View>
      </Modal>

      {/* --- CONTENT SECTION --- */}
      <ScrollView className="flex-1 px-5 mt-6" showsVerticalScrollIndicator={false}>
        
        {/* Banner */}
        <TouchableOpacity onPress={goToDetail} activeOpacity={0.9}>
          <View className="w-full h-48 bg-gray-500 rounded-xl mb-6" />
        </TouchableOpacity>

        {/* Categorized */}
        <Text className="text-base font-bold text-black mb-3">
          Categorized for you!
        </Text>
        <View className="flex-row flex-wrap justify-between">
          {[1, 2, 3, 4].map((i) => (
            <TouchableOpacity key={i} onPress={goToDetail} activeOpacity={0.8} className="w-[48%] mb-4">
              <View className="h-28 bg-[#98E2F1] rounded-lg" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Popular */}
        <Text className="text-base font-bold text-black mb-3">
          Popular Near You
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
            {[1, 2, 3].map((i) => (
              <TouchableOpacity key={i} onPress={goToDetail} activeOpacity={0.8} className="mr-4">
                 <View className="w-32 h-32 bg-[#98E2F1] rounded-lg" />
              </TouchableOpacity>
            ))}
        </ScrollView>

        <View className="h-28" /> 
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;