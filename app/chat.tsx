import { View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Chat = () => {
  const router = useRouter();

  return (
    // Background cyan (secondary) sesuai gambar
    <SafeAreaView className="flex-1 bg-secondary" edges={['top', 'bottom']}>
      
      {/* --- HEADER --- */}
      <View className="flex-row items-center justify-between px-6 py-4 bg-accent/20 rounded-b-[24px]">
        <View className="flex-row items-center gap-4">
          {/* Tombol Back (Menggunakan icon panah lengkung seperti di gambar) */}
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="black" />
          </TouchableOpacity>
          <View>
            <Text className="text-2xl font-bold text-black">Admin</Text>
          </View>
        </View>
        {/* Icon Menu di Kanan */}
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        className="flex-1"
        keyboardVerticalOffset={10}
      >
        <ScrollView 
          className="flex-1 px-4 py-6" 
          contentContainerStyle={{ paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}
        >
            
            {/* 1. Chat User (Kanan - Abu Gelap) */}
            <View className="self-end bg-[#6B6B6B] rounded-tr-none rounded-2xl p-4 mb-4 max-w-[80%] shadow-sm">
                <Text className="text-white text-base font-medium">
                    Min, mau tanya statistik event saya dong
                </Text>
            </View>

            {/* 2. Chat Admin (Kiri - Ungu) */}
            <View className="self-start bg-[#6200EE] rounded-tl-none rounded-2xl p-4 mb-2 max-w-[80%] shadow-sm">
                <Text className="text-white text-base font-medium">
                    Halo kak, ini dia statistik event kamu bulan ini ya
                </Text>
            </View>

            {/* 3. Kartu Statistik (Kiri - Ungu Besar) */}
            <View className="self-start bg-[#6200EE] rounded-2xl p-5 mb-4 w-[85%] shadow-md overflow-hidden">
                
                {/* Visualisasi Grafik Dummy */}
                <View className="h-32 mb-4 flex-row items-end justify-between px-2 pb-2 border-l-4 border-b-4 border-white/80">
                    {/* Bar 1 */}
                    <View className="items-center gap-1">
                        <View className="w-3 h-3 bg-white rounded-full z-10" />
                        <View className="w-3 h-10 bg-gray-300 rounded-t-sm" />
                    </View>
                    {/* Bar 2 */}
                    <View className="items-center gap-1">
                        <View className="w-3 h-3 bg-white rounded-full z-10" />
                        <View className="w-3 h-16 bg-gray-300 rounded-t-sm" />
                    </View>
                    {/* Bar 3 */}
                    <View className="items-center gap-1">
                        <View className="w-3 h-3 bg-white rounded-full z-10" />
                        <View className="w-3 h-12 bg-gray-300 rounded-t-sm" />
                    </View>
                    {/* Bar 4 */}
                    <View className="items-center gap-1">
                        <View className="w-3 h-3 bg-white rounded-full z-10" />
                        <View className="w-3 h-20 bg-gray-300 rounded-t-sm" />
                    </View>
                    
                    {/* Garis Grafik (Imajiner/Visual) */}
                    <View className="absolute inset-0 top-2 left-2 right-2 border-white/0" style={{ transform: [{rotate: '-5deg'}]}}>
                         {/* Kita gunakan visualisasi sederhana bar & dot diatas */}
                    </View>
                </View>
                
                <Text className="text-white text-center font-bold text-sm mb-4">Statistik Event kamu</Text>
                
                {/* List Statistik */}
                <View className="gap-2">
                    <View className="bg-[#7F39FB] p-2 px-3 rounded-lg border-b border-white/20">
                        <Text className="text-white font-bold text-sm">12 Bookmark</Text>
                    </View>
                    <View className="bg-[#7F39FB] p-2 px-3 rounded-lg border-b border-white/20">
                        <Text className="text-white font-bold text-sm">13 Notifikasi</Text>
                    </View>
                    <View className="bg-[#7F39FB] p-2 px-3 rounded-lg border-b border-white/20">
                        <Text className="text-white font-bold text-sm">15 Menekan Tautan</Text>
                    </View>
                </View>
            </View>

        </ScrollView>

        {/* --- INPUT BAR --- */}
        <View className="px-4 pb-6">
            <View className="flex-row items-center bg-white rounded-full px-5 h-12 shadow-md">
                <TextInput 
                    className="flex-1 text-black font-medium h-full"
                    placeholder="Ketik pesan..."
                    placeholderTextColor="#9CA3AF"
                />
                <TouchableOpacity>
                    <Ionicons name="send" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;