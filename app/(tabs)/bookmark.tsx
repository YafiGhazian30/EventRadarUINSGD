import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const Bookmark = () => {
  const goToDetail = () => router.push('/events/1');

  return (
    <SafeAreaView className="flex-1 bg-primary" edges={['top']}>
      <View className="px-5 pb-6 bg-secondary rounded-b-[16px] pt-6 shadow-sm items-center">
        <Text className="text-2xl font-bold text-black">Event yang Anda Simpan</Text>
      </View>

      <ScrollView className="flex-1 px-5 mt-6" showsVerticalScrollIndicator={false}>
        {/* Item 1 */}
        <TouchableOpacity onPress={goToDetail} activeOpacity={0.7} className="mb-4">
          <View className="w-full h-32 bg-secondary rounded-xl p-4 flex-row items-center border border-gray-100 shadow-sm">
              <View className="w-24 h-24 bg-white/40 rounded-lg mr-4" />
              <View className="flex-1 justify-center">
                  <Text className="text-lg font-bold text-black mb-1" numberOfLines={1}>Workshop React Native</Text>
                  <Text className="text-sm text-gray-700 mb-2">Aula UIN SGD</Text>
                  <View className="self-start bg-white/50 px-2 py-1 rounded-md">
                    <Text className="text-xs text-black font-medium">12 Okt 2023</Text>
                  </View>
              </View>
          </View>
        </TouchableOpacity>

        {/* Item 2 */}
        <TouchableOpacity onPress={goToDetail} activeOpacity={0.7} className="mb-4">
          <View className="w-full h-32 bg-secondary rounded-xl p-4 flex-row items-center border border-gray-100 shadow-sm">
              <View className="w-24 h-24 bg-white/40 rounded-lg mr-4" />
              <View className="flex-1 justify-center">
                  <Text className="text-lg font-bold text-black mb-1" numberOfLines={1}>Seminar Teknologi AI</Text>
                  <Text className="text-sm text-gray-700 mb-2">Gedung Anwar Musaddad</Text>
                  <View className="self-start bg-white/50 px-2 py-1 rounded-md">
                    <Text className="text-xs text-black font-medium">15 Okt 2023</Text>
                  </View>
              </View>
          </View>
        </TouchableOpacity>

        <View className="h-28" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookmark;