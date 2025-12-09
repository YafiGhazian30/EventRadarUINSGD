import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext'; // Opsional jika auto-login setelah daftar
import icons from '@/constants/icons';
import { Link, useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password) {
      alert('Mohon lengkapi semua data');
      return;
    }
    setIsSubmitting(true);

    try {
      // --- LOGIKA REGISTER ---
      console.log("Register User:", form);
      alert('Pendaftaran Berhasil! Silakan Login.');
      router.replace('/login'); // Kembali ke login setelah sukses
    } catch (error) {
      alert('Pendaftaran Gagal');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white h-full">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
          
          <View className="items-center mb-6">
            <Text className="text-2xl font-bold text-black text-center">Buat Akun Baru</Text>
            <Text className="text-gray-500 text-center mt-1">Bergabunglah dengan Event Radar UIN</Text>
          </View>

          <View className="gap-4">
            <View>
              <Text className="text-gray-700 font-medium mb-2">Nama Lengkap</Text>
              <TextInput 
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-black focus:border-secondary"
                placeholder="Contoh: Budi Santoso"
                value={form.name}
                onChangeText={(text) => setForm({ ...form, name: text })}
              />
            </View>

            <View>
              <Text className="text-gray-700 font-medium mb-2">Email</Text>
              <TextInput 
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-black focus:border-secondary"
                placeholder="Contoh: budi@uin.ac.id"
                keyboardType="email-address"
                autoCapitalize="none"
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
              />
            </View>

            <View>
              <Text className="text-gray-700 font-medium mb-2">Password</Text>
              <TextInput 
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-black focus:border-secondary"
                placeholder="Buat password aman..."
                secureTextEntry
                value={form.password}
                onChangeText={(text) => setForm({ ...form, password: text })}
              />
            </View>

            <TouchableOpacity 
              onPress={handleRegister}
              className="w-full bg-secondary h-14 rounded-xl items-center justify-center mt-4 shadow-sm"
              disabled={isSubmitting}
            >
              <Text className="text-black font-bold text-lg">{isSubmitting ? 'Memproses...' : 'Daftar'}</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-2">
              <Text className="text-gray-500">Sudah punya akun? </Text>
              <Link href="/login" asChild>
                <TouchableOpacity>
                  <Text className="text-primary font-bold">Masuk di sini</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;