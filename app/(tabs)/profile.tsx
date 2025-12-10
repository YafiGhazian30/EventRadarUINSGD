import { View, Text, TouchableOpacity, Image, ScrollView, Switch, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';
import icons from '@/constants/icons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Profile = () => {
  const { signOut } = useAuth();
  const router = useRouter();
  
  // State untuk toggle notifikasi (simulasi)
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  const handleLogout = () => {
    Alert.alert(
      "Konfirmasi Logout",
      "Apakah Anda yakin ingin keluar dari akun?",
      [
        { text: "Batal", style: "cancel" },
        { 
          text: "Keluar", 
          style: "destructive", 
          onPress: () => {
            signOut(); // 1. Hapus sesi login
            router.replace('/login'); // 2. Paksa pindah ke halaman login
          } 
        }
      ]
    );
  };

  const menuItems = [
    { 
      title: 'Edit Profil', 
      icon: 'person-outline', 
      onPress: () => console.log('Edit Profil Clicked') 
    },
    { 
      title: 'Notifikasi', 
      icon: 'notifications-outline', 
      type: 'toggle',
      value: isNotificationEnabled,
      onToggle: () => setIsNotificationEnabled(!isNotificationEnabled)
    },
    { 
      title: 'Bahasa', 
      icon: 'language-outline', 
      value: 'Indonesia', 
      onPress: () => console.log('Language Clicked') 
    },
    { 
      title: 'Bantuan & Dukungan', 
      icon: 'help-circle-outline', 
      onPress: () => console.log('Help Clicked') 
    },
    { 
      title: 'Tentang Aplikasi', 
      icon: 'information-circle-outline', 
      onPress: () => console.log('About Clicked') 
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* Header Profil dengan Background Warna */}
        <View className="bg-secondary pb-6 rounded-b-3xl shadow-sm border-b border-gray-100">
          <View className="items-center mt-4">
            <View className="relative">
              <View className="w-28 h-28 bg-gray-100 rounded-full items-center justify-center border-4 border-white shadow-md">
                 <Image 
                   source={icons.profile} 
                   className="w-16 h-16"
                   style={{ tintColor: '#21194E' }} 
                   resizeMode="contain"
                 />
              </View>
              <TouchableOpacity className="absolute bottom-0 right-0 bg-secondary p-2 rounded-full border-2 border-white">
                <Ionicons name="camera" size={16} color="black" />
              </TouchableOpacity>
            </View>

            <Text className="text-2xl font-bold text-black mt-4">Mahasiswa UIN</Text>
            <Text className="text-gray-500">mahasiswa@uin.ac.id</Text>

            {/* Statistik Singkat */}
            <View className="flex-row mt-6 w-full justify-center gap-8 px-8">
              <View className="items-center">
                <Text className="text-xl font-bold text-darkgrey">12</Text>
                <Text className="text-darkgrey text-xs">Event Diikuti</Text>
              </View>
              <View className="w-[1px] h-full bg-gray-200" />
              <View className="items-center">
                <Text className="text-xl font-bold text-darkgrey">5</Text>
                <Text className="text-darkgrey text-xs">Disimpan</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View className="mt-6 px-4">
          <Text className="text-gray-800 font-semibold mb-3 ml-2">Pengaturan Akun</Text>
          
          <View className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {menuItems.map((item, index) => (
              <View key={index}>
                <TouchableOpacity 
                  onPress={item.onPress}
                  disabled={item.type === 'toggle'}
                  className="flex-row items-center justify-between p-4 bg-white active:bg-gray-50"
                >
                  <View className="flex-row items-center gap-4">
                    <View className="w-10 h-10 bg-gray-50 rounded-full items-center justify-center">
                      <Ionicons name={item.icon as any} size={22} color="#21194E" />
                    </View>
                    <Text className="text-black font-medium text-base">{item.title}</Text>
                  </View>

                  {item.type === 'toggle' ? (
                    <Switch
                      trackColor={{ false: "#767577", true: "#FF8E01" }}
                      thumbColor={item.value ? "#fff" : "#f4f3f4"}
                      onValueChange={item.onToggle}
                      value={item.value as boolean}
                    />
                  ) : (
                    <View className="flex-row items-center gap-2">
                      {item.value && (
                        <Text className="text-gray-400 text-sm">{item.value}</Text>
                      )}
                      <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                    </View>
                  )}
                </TouchableOpacity>
                {/* Divider antar menu, kecuali item terakhir */}
                {index < menuItems.length - 1 && (
                  <View className="h-[1px] bg-gray-100 ml-16" />
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Tombol Logout */}
        <View className="mt-8 px-6">
          <TouchableOpacity 
            onPress={handleLogout}
            className="flex-row items-center justify-center bg-red-50 p-4 rounded-xl border border-red-100"
          >
            <Ionicons name="log-out-outline" size={22} color="#DC2626" />
            <Text className="text-red-600 font-bold ml-2 text-lg">Keluar</Text>
          </TouchableOpacity>
          <Text className="text-center text-gray-400 text-xs mt-4">Versi Aplikasi 1.0.0</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;