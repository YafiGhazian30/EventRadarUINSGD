import { View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ChatDetailAdmin = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-secondary" edges={['top', 'bottom']}>
      
      {/* HEADER */}
      <View className="flex-row items-center justify-between px-6 py-4 bg-accent/20 rounded-b-[24px]">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="black" />
          </TouchableOpacity>
          <View>
            <Text className="text-xl font-bold text-black">Ahmad (Mahasiswa)</Text>
            <Text className="text-xs text-gray-600">Online</Text>
          </View>
        </View>
        <TouchableOpacity>
             <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </TouchableOpacity>
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
            {/* Chat User (Kiri) */}
            <View className="self-start bg-[#6B6B6B] rounded-tl-none rounded-2xl p-4 mb-4 max-w-[80%] shadow-sm">
                <Text className="text-white text-base font-medium">Min, mau tanya statistik event saya dong</Text>
                <Text className="text-gray-300 text-[10px] mt-1 text-right">09:41</Text>
            </View>

            {/* Chat Admin (Kanan) */}
            <View className="self-end bg-[#6200EE] rounded-tr-none rounded-2xl p-4 mb-2 max-w-[80%] shadow-sm">
                <Text className="text-white text-base font-medium">Halo kak, ini dia statistik event kamu bulan ini ya</Text>
                <Text className="text-purple-200 text-[10px] mt-1 text-right">09:42 • Dibaca</Text>
            </View>

            {/* Kartu Statistik (Kanan) */}
            <View className="self-end bg-[#6200EE] rounded-2xl p-5 mb-4 w-[85%] shadow-md overflow-hidden">
                <View className="h-32 mb-4 flex-row items-end justify-between px-2 pb-2 border-l-4 border-b-4 border-white/80">
                    <View className="items-center gap-1"><View className="w-3 h-3 bg-white rounded-full z-10" /><View className="w-3 h-10 bg-gray-300 rounded-t-sm" /></View>
                    <View className="items-center gap-1"><View className="w-3 h-3 bg-white rounded-full z-10" /><View className="w-3 h-16 bg-gray-300 rounded-t-sm" /></View>
                    <View className="items-center gap-1"><View className="w-3 h-3 bg-white rounded-full z-10" /><View className="w-3 h-12 bg-gray-300 rounded-t-sm" /></View>
                    <View className="items-center gap-1"><View className="w-3 h-3 bg-white rounded-full z-10" /><View className="w-3 h-20 bg-gray-300 rounded-t-sm" /></View>
                </View>
                <Text className="text-white text-center font-bold text-sm mb-4">Laporan Statistik User</Text>
                <View className="gap-2">
                    <View className="bg-[#7F39FB] p-2 px-3 rounded-lg border-b border-white/20"><Text className="text-white font-bold text-sm">12 Bookmark</Text></View>
                    <View className="bg-[#7F39FB] p-2 px-3 rounded-lg border-b border-white/20"><Text className="text-white font-bold text-sm">13 Notifikasi</Text></View>
                </View>
                <Text className="text-purple-200 text-[10px] mt-2 text-right">09:42 • Dibaca</Text>
            </View>

             {/* Chat User Balasan (Kiri) */}
             <View className="self-start bg-[#6B6B6B] rounded-tl-none rounded-2xl p-4 mb-4 max-w-[80%] shadow-sm">
                <Text className="text-white text-base font-medium">Wah makasih banyak min! Sangat membantu 🙏</Text>
                <Text className="text-gray-300 text-[10px] mt-1 text-right">09:45</Text>
            </View>

        </ScrollView>

        <View className="px-4 pb-6">
            <View className="flex-row items-center bg-white rounded-full px-5 h-12 shadow-md">
                <TextInput className="flex-1 text-black font-medium h-full" placeholder="Balas pesan..." placeholderTextColor="#9CA3AF"/>
                <TouchableOpacity><Ionicons name="send" size={24} color="#6200EE" /></TouchableOpacity>
            </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatDetailAdmin;