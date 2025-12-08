import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';
import icons from '@/constants/icons'; // Pastikan path icon benar

const Login = () => {
  const { signIn } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-white justify-center px-6">
      <View className="items-center mb-10">
        {/* Logo atau Icon Aplikasi */}
        <View className="w-24 h-24 bg-primary rounded-full items-center justify-center mb-4 border-4 border-accent">
           <Image 
             source={icons.home} 
             className="w-12 h-12" 
             style={{ tintColor: '#21194E' }} 
             resizeMode='contain'
           />
        </View>
        <Text className="text-3xl font-bold text-black text-center">
          Event Radar UIN
        </Text>
        <Text className="text-gray-500 text-center mt-2">
          Silakan pilih role untuk masuk (Simulasi)
        </Text>
      </View>

      <View className="gap-4">
        {/* Tombol Login USER */}
        <TouchableOpacity 
          onPress={() => signIn('user')}
          className="w-full bg-secondary p-4 rounded-xl border border-gray-200 shadow-sm items-center flex-row justify-center"
        >
          <Text className="text-black font-bold text-lg">Login as User</Text>
        </TouchableOpacity>

        {/* Tombol Login ORGANIZER */}
        <TouchableOpacity 
          onPress={() => signIn('organizer')}
          className="w-full bg-primary p-4 rounded-xl border border-gray-200 shadow-sm items-center flex-row justify-center"
        >
          <Text className="text-black font-bold text-lg">Login as Organizer</Text>
        </TouchableOpacity>

        {/* Tombol Login ADMIN */}
        <TouchableOpacity 
          onPress={() => signIn('admin')}
          className="w-full bg-accent p-4 rounded-xl border border-gray-200 shadow-sm items-center flex-row justify-center"
        >
          <Text className="text-white font-bold text-lg">Login as Admin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;