import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons'; 
import { useAuth } from '@/context/AuthContext'; // Import useAuth

const Profile = () => {
  const { signOut } = useAuth(); // Ambil fungsi signOut

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* --- HEADER --- */}
      <View className="px-5 pb-6 bg-primary rounded-b-[16px] pt-3 shadow-sm items-center">
        <Text className="text-lg font-bold text-black mb-3">
          My Profile
        </Text>
        <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-2 border-2 border-accent">
            <Image 
                source={icons.profile} 
                className="w-10 h-10" 
                resizeMode="contain" 
                style={{ tintColor: '#21194E' }}
            />
        </View>
        <Text className="text-xl font-bold text-black">Mahasiswa UIN</Text>
        <Text className="text-gray-600">user@uin-sgd.ac.id</Text>
      </View>

      {/* --- CONTENT --- */}
      <View className="px-5 mt-6 gap-4">
        <View className="p-4 bg-gray-50 rounded-xl border border-gray-100">
             <Text className="font-bold mb-1">Role Status</Text>
             <Text className="text-blue-600 font-bold">User (Mahasiswa)</Text>
        </View>

        {/* Tombol Logout */}
        <TouchableOpacity 
            onPress={signOut} // Panggil fungsi Logout
            className="w-full bg-red-50 py-4 rounded-xl border border-red-100 items-center mt-10"
        >
            <Text className="text-red-600 font-bold text-lg">Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;