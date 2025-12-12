import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router'; // Import router

const Schedule = () => {
  // Fungsi navigasi ke detail
  const goToDetail = () => router.push('/events/1');

  return (
    <SafeAreaView className="flex-1 bg-primary" edges={['top']}>
      
      {/* HEADER */}
      <View className="px-5 pb-6 bg-secondary rounded-b-[16px] pt-6 shadow-sm items-center">
        <Text className="text-2xl font-bold text-black">
          Jadwal Event yang Anda Ikuti
        </Text>
      </View>

      {/* CONTENT */}
      <ScrollView className="flex-1 px-5 mt-6" showsVerticalScrollIndicator={false}>
        <Text className="text-lg font-bold text-black mb-4">
          Hari Ini, 12 Okt 2023
        </Text>

        {/* Item 1 */}
        <TouchableOpacity onPress={goToDetail} activeOpacity={0.7} className="mb-4">
          <View className="w-full bg-white border border-gray-200 rounded-xl p-4 flex-row shadow-sm">
              <View className="mr-4 items-center justify-center border-r border-gray-200 pr-4">
                  <Text className="text-lg font-bold text-grey">09:00</Text>
                  <Text className="text-xs text-gray-500">AM</Text>
              </View>
              <View className="flex-1 justify-center">
                  <Text className="text-lg font-bold text-black mb-1">Opening Ceremony</Text>
                  <Text className="text-sm text-gray-500 mb-2">Aula Utama UIN SGD</Text>
                  <View className="self-start bg-blue-50 px-2 py-1 rounded-md">
                    <Text className="text-xs text-blue-600 font-medium">Umum</Text>
                  </View>
              </View>
          </View>
        </TouchableOpacity>

        {/* Item 2 */}
        <TouchableOpacity onPress={goToDetail} activeOpacity={0.7} className="mb-4">
          <View className="w-full bg-white border border-gray-200 rounded-xl p-4 flex-row shadow-sm">
              <View className="mr-4 items-center justify-center border-r border-gray-200 pr-4">
                  <Text className="text-lg font-bold text-grey">13:00</Text>
                  <Text className="text-xs text-gray-500">PM</Text>
              </View>
              <View className="flex-1 justify-center">
                  <Text className="text-lg font-bold text-black mb-1">Workshop UI/UX</Text>
                  <Text className="text-sm text-gray-500 mb-2">Lab Komputer 3</Text>
                  <View className="self-start bg-purple-50 px-2 py-1 rounded-md">
                    <Text className="text-xs text-purple-600 font-medium">Teknologi</Text>
                  </View>
              </View>
          </View>
        </TouchableOpacity>

        <Text className="text-lg font-bold text-black mb-4 mt-2">
          Besok, 13 Okt 2023
        </Text>

        {/* Item 3 */}
        <TouchableOpacity onPress={goToDetail} activeOpacity={0.7} className="mb-4">
          <View className="w-full bg-white border border-gray-200 rounded-xl p-4 flex-row shadow-sm">
              <View className="mr-4 items-center justify-center border-r border-gray-200 pr-4">
                  <Text className="text-lg font-bold text-grey">08:00</Text>
                  <Text className="text-xs text-gray-500">AM</Text>
              </View>
              <View className="flex-1 justify-center">
                  <Text className="text-lg font-bold text-black mb-1">Seminar Kewirausahaan</Text>
                  <Text className="text-sm text-gray-500 mb-2">Gedung Anwar Musaddad</Text>
                  <View className="self-start bg-orange-50 px-2 py-1 rounded-md">
                    <Text className="text-xs text-orange-600 font-medium">Bisnis</Text>
                  </View>
              </View>
          </View>
        </TouchableOpacity>

        <View className="h-28" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;