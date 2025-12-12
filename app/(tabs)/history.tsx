import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const History = () => {
  const goToDetail = () => router.push('/events/1');

  return (
    <SafeAreaView className="flex-1 bg-primary" edges={['top']}>
      <View className="px-5 pb-6 bg-secondary rounded-b-[16px] pt-6 shadow-sm items-center">
        <Text className="text-2xl font-bold text-black">Riwayat Event yang Anda Ikuti</Text>
      </View>

      <ScrollView className="flex-1 px-5 mt-6" showsVerticalScrollIndicator={false}>
        {/* Item 1 */}
        <TouchableOpacity onPress={goToDetail} activeOpacity={0.7} className="mb-4">
          <View className="w-full bg-secondary rounded-xl p-4 border border-gray-200 flex-row">
              <View className="w-16 h-16 bg-gray-200 rounded-lg items-center justify-center mr-4">
                  <Text className="text-lg font-bold text-gray-600">20</Text>
                  <Text className="text-xs font-medium text-gray-500">SEP</Text>
              </View>
              <View className="flex-1 justify-center">
                  <Text className="text-lg font-bold text-gray-800 mb-1" numberOfLines={1}>Webinar Cyber Security</Text>
                  <Text className="text-sm text-gray-500 mb-2">Online (Zoom Meeting)</Text>
                  <View className="self-start bg-green-100 px-2 py-1 rounded-md border border-green-200">
                    <Text className="text-xs text-green-700 font-bold">Selesai</Text>
                  </View>
              </View>
          </View>
        </TouchableOpacity>

        {/* Item 2 */}
        <TouchableOpacity onPress={goToDetail} activeOpacity={0.7} className="mb-4">
          <View className="w-full bg-secondary rounded-xl p-4 border border-gray-200 flex-row">
              <View className="w-16 h-16 bg-gray-200 rounded-lg items-center justify-center mr-4">
                  <Text className="text-lg font-bold text-gray-600">15</Text>
                  <Text className="text-xs font-medium text-gray-500">AGU</Text>
              </View>
              <View className="flex-1 justify-center">
                  <Text className="text-lg font-bold text-gray-800 mb-1" numberOfLines={1}>Lomba Koding Nasional</Text>
                  <Text className="text-sm text-gray-500 mb-2">Lab Terpadu UIN</Text>
                  <View className="self-start bg-green-100 px-2 py-1 rounded-md border border-green-200">
                    <Text className="text-xs text-green-700 font-bold">Selesai</Text>
                  </View>
              </View>
          </View>
        </TouchableOpacity>

        <View className="h-28" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;