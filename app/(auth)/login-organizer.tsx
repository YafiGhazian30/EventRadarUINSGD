import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';
import icons from '@/constants/icons';
import { Link } from 'expo-router';

const LoginOrganizer = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulasi Login Organizer
    console.log("Login Organizer:", email);
    signIn('organizer');
  };

  return (
    <SafeAreaView className="flex-1 bg-white h-full">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
          
          <View className="items-center mb-8">
             {/* Logo Icon dengan warna berbeda */}
            <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-4 border-2 border-primary">
               <Image source={icons.profile} className="w-10 h-10" style={{ tintColor: '#FF8E01' }} resizeMode='contain' />
            </View>
            <Text className="text-2xl font-bold text-primary text-center">Login Organizer</Text>
            <Text className="text-gray-500 text-center mt-1">Kelola event kampus Anda di sini</Text>
          </View>

          <View className="gap-4">
            <View>
              <Text className="text-gray-700 font-medium mb-2">Email Organizer</Text>
              <TextInput 
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-black focus:border-primary"
                placeholder="email@organisasi.uin.ac.id"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
            </View>

            <View>
              <Text className="text-gray-700 font-medium mb-2">Password</Text>
              <TextInput 
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-black focus:border-primary"
                placeholder="Masukan password..."
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity 
              onPress={handleLogin}
              className="w-full bg-primary h-14 rounded-xl items-center justify-center mt-4 shadow-sm"
            >
              <Text className="text-white font-bold text-lg">Masuk</Text>
            </TouchableOpacity>

            <Link href="/login" asChild>
              <TouchableOpacity className="items-center mt-4">
                <Text className="text-gray-400">Batalkan & Kembali</Text>
              </TouchableOpacity>
            </Link>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginOrganizer;