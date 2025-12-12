import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const Search = () => {
  const [query, setQuery] = useState('');
  const goToDetail = () => router.push('/events/1');

  return (
    <SafeAreaView className="flex-1 bg-primary" edges={['top']}>
      <View className="px-5 pb-6 bg-secondary rounded-b-[16px] pt-3 shadow-sm">
        <Text className="text-lg font-bold text-black mb-3">Pencarian Event</Text>
        <View className="flex-row items-center gap-4">
          <View className="flex-1 flex-row items-center px-4 h-11 bg-[#F2F2F2] border-2 border-border rounded-[16px]">
            <Image source={icons.search} className="w-5 h-5" resizeMode="contain" style={{ tintColor: 'black' }} />
            <TextInput 
              className="flex-1 ml-3 text-black font-medium h-full py-0"
              placeholder="Search events..."
              placeholderTextColor="#9CA3AF"
              value={query}
              onChangeText={setQuery}
              autoFocus={true} 
              textAlignVertical="center"
            />
          </View>
          <TouchableOpacity onPress={() => router.navigate('/')} activeOpacity={0.7}>
            <Text className="text-icon font-bold text-base">Batal</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 mt-6" showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        {query.length === 0 ? (
          <View className="items-center justify-center mt-20 opacity-50">
            <Image source={icons.search} className="w-16 h-16 mb-4 tint-lightgrey" style={{ tintColor: '#D1D5DB' }} />
            <Text className="text-gray-400 font-medium">Ketik untuk mencari event...</Text>
          </View>
        ) : (
          <View>
            <Text className="text-base font-bold text-black mb-4">Hasil untuk "{query}"</Text>
            {/* Result Item */}
            <TouchableOpacity onPress={goToDetail} activeOpacity={0.7}>
                <View className="w-full h-24 bg-secondary rounded-xl mb-3 flex-row p-3 border border-gray-100">
                    <View className="w-16 h-16 bg-white/40 rounded-lg mr-3" />
                    <View className="flex-1 justify-center">
                        <Text className="font-bold text-black mb-1">Hasil Pencarian 1</Text>
                        <Text className="text-xs text-gray-700">Deskripsi singkat event...</Text>
                    </View>
                </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;