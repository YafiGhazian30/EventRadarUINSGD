import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Data Dummy Chat List
const CHAT_DATA = [
  {
    id: '1',
    name: 'Ahmad (Mahasiswa)',
    message: 'Wah makasih banyak min! Sangat membantu 🙏',
    time: '09:45',
    unread: 2,
    avatarColor: 'bg-blue-100',
    avatarText: 'AM'
  },
  {
    id: '2',
    name: 'Siti Aminah',
    message: 'Min, sertifikat seminar kemarin kapan keluar ya?',
    time: 'Kemarin',
    unread: 0,
    avatarColor: 'bg-pink-100',
    avatarText: 'SA'
  },
  {
    id: '3',
    name: 'Budi Santoso',
    message: 'Apakah event ini terbuka untuk umum?',
    time: 'Senin',
    unread: 0,
    avatarColor: 'bg-green-100',
    avatarText: 'BS'
  },
  {
    id: '4',
    name: 'Rina Wati',
    message: 'Link pendaftarannya error min.',
    time: '12/10/23',
    unread: 5,
    avatarColor: 'bg-purple-100',
    avatarText: 'RW'
  },
];

const ChatList = () => {
  const router = useRouter();

  const handlePressChat = (name: string) => {
    // Navigasi ke detail chat sambil membawa nama user
    router.push({
        pathname: '/(admin)/chat-detail',
        params: { userName: name } 
    });
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      onPress={() => handlePressChat(item.name)}
      className="flex-row items-center px-5 py-4 bg-white border-b border-gray-50 active:bg-gray-50"
    >
      {/* Avatar */}
      <View className={`w-14 h-14 rounded-full items-center justify-center mr-4 ${item.avatarColor}`}>
        <Text className="text-gray-700 font-bold text-lg">{item.avatarText}</Text>
      </View>

      {/* Konten Pesan */}
      <View className="flex-1">
        <View className="flex-row justify-between mb-1">
            <Text className="text-base font-bold text-black">{item.name}</Text>
            <Text className={`text-xs ${item.unread > 0 ? 'text-secondary font-bold' : 'text-gray-400'}`}>
                {item.time}
            </Text>
        </View>
        <Text numberOfLines={1} className="text-gray-500 text-sm">
            {item.message}
        </Text>
      </View>

      {/* Badge Unread (Jika ada) */}
      {item.unread > 0 && (
          <View className="bg-secondary w-6 h-6 rounded-full items-center justify-center ml-2">
            <Text className="text-black text-xs font-bold">{item.unread}</Text>
          </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      
      {/* HEADER */}
      <View className="px-5 py-4 bg-white border-b border-gray-100 flex-row items-center justify-between">
        <View className="flex-row items-center">
            <TouchableOpacity onPress={() => router.back()} className="mr-3 bg-gray-50 p-2 rounded-full">
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold text-black">Pesan Masuk</Text>
        </View>
        <TouchableOpacity>
             <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* LIST CHAT */}
      <FlatList
        data={CHAT_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
};

export default ChatList;