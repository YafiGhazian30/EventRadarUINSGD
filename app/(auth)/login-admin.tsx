import { View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'expo-router';

const LoginAdmin = () => {
  const { signIn } = useAuth();
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulasi Login Admin sederhana
    if (password === 'admin123') {
      signIn('admin');
    } else {
      alert('Password Admin Salah!');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900 h-full"> 
      {/* Background gelap untuk membedakan Admin */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
          
          <View className="items-center mb-8">
            <Text className="text-3xl font-bold text-white text-center">Portal Admin</Text>
            <Text className="text-gray-400 text-center mt-2">Hanya untuk pengelola sistem</Text>
          </View>

          <View className="gap-5 bg-white p-6 rounded-2xl shadow-lg">
            <View>
              <Text className="text-gray-800 font-bold mb-2">Kode Akses / Password Admin</Text>
              <TextInput 
                className="w-full h-12 bg-gray-100 border border-gray-300 rounded-xl px-4 text-black"
                placeholder="Masukkan kode admin..."
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity 
              onPress={handleLogin}
              className="w-full bg-accent h-14 rounded-xl items-center justify-center mt-2"
            >
              <Text className="text-white font-bold text-lg">Masuk Dashboard</Text>
            </TouchableOpacity>

            <Link href="/login" asChild>
              <TouchableOpacity className="items-center mt-2">
                <Text className="text-gray-500">← Kembali ke Login User</Text>
              </TouchableOpacity>
            </Link>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginAdmin;