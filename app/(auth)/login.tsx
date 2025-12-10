import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';
import icons from '@/constants/icons';
import { Link, useRouter } from 'expo-router';

const Login = () => {
  const { signIn } = useAuth();
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Mohon isi Email dan Password');
      return;
    }
    setIsSubmitting(true);

    try {
      // --- LOGIKA LOGIN USER ---
      // Ganti dengan API call yang sebenarnya nanti
      console.log("Login User:", email, password);
      
      signIn('user'); // Masuk sebagai User
    } catch (error) {
      alert('Login Gagal');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white h-full">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
          
          <View className="items-center mb-8">
            <View className="w-20 h-20 bg-primary rounded-full items-center justify-center mb-4 border-2 border-accent">
               <Image source={icons.home} className="w-10 h-10" style={{ tintColor: '#21194E' }} resizeMode='contain' />
            </View>
            <Text className="text-2xl font-bold text-black text-center">Halo, Mahasiswa!</Text>
            <Text className="text-gray-500 text-center mt-1">Masuk untuk melihat event kampus</Text>
          </View>

          <View className="gap-4">
            <View>
              <Text className="text-gray-700 font-medium mb-2">Email / Username</Text>
              <TextInput 
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-black focus:border-secondary"
                placeholder="Masukan email..."
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
            </View>

            <View>
              <Text className="text-gray-700 font-medium mb-2">Password</Text>
              <TextInput 
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-black focus:border-secondary"
                placeholder="Masukan password..."
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity 
              onPress={handleLogin}
              className="w-full bg-secondary h-14 rounded-xl items-center justify-center mt-4 shadow-sm"
              disabled={isSubmitting}
            >
              <Text className="text-black font-bold text-lg">{isSubmitting ? 'Memproses...' : 'Masuk'}</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-2">
              <Text className="text-gray-500">Belum punya akun? </Text>
              <Link href="/register" asChild>
                <TouchableOpacity>
                  <Text className="text-grey font-bold">Daftar Sekarang</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>

          {/* --- BAGIAN YANG DIREVISI --- */}
          <View className="flex-row justify-center items-center mt-8">
            <Text className="text-gray-500 text-sm">Atau masuk sebagai </Text>
            <Link href="/login-admin" asChild>
              <TouchableOpacity activeOpacity={0.7}>
                <Text className="text-accent font-bold text-sm underline ml-1">Admin</Text>
              </TouchableOpacity>
            </Link>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;