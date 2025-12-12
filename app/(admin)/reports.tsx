import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Reports = () => {
  const router = useRouter();

  // --- DUMMY DATA STATISTIK ---
  
  // Statistik Kategori Paling Diminati
  const categoryStats = [
    { label: "Sains & Teknologi", percentage: 85, color: "bg-blue-500", count: 450 },
    { label: "Bisnis & Karir", percentage: 65, color: "bg-purple-500", count: 320 },
    { label: "Seni & Budaya", percentage: 40, color: "bg-pink-500", count: 180 },
    { label: "Kajian Islam", percentage: 30, color: "bg-green-500", count: 120 },
  ];

  // Statistik Jenis Event Terpopuler
  const typeStats = [
    { label: "Seminar", percentage: 70, color: "bg-orange-500", count: 380 },
    { label: "Workshop", percentage: 55, color: "bg-cyan-500", count: 240 },
    { label: "Konser Musik", percentage: 45, color: "bg-red-500", count: 200 },
    { label: "Lomba", percentage: 25, color: "bg-indigo-500", count: 90 },
  ];

  // Komponen Bar Chart Sederhana
  const StatBar = ({ label, percentage, color, count }: any) => (
    <View className="mb-4">
      <View className="flex-row justify-between mb-1">
        <Text className="text-sm font-medium text-gray-700">{label}</Text>
        <Text className="text-xs font-bold text-gray-500">{count} Peserta</Text>
      </View>
      <View className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
        <View 
          className={`h-full rounded-full ${color}`} 
          style={{ width: `${percentage}%` }} 
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      
      {/* --- HEADER --- */}
      <View className="px-5 pb-6 bg-secondary rounded-b-[16px] pt-4 shadow-sm flex-row items-center justify-between">
        <TouchableOpacity onPress={() => router.back()} className="bg-white/20 p-2 rounded-full">
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-black flex-1 text-center mr-10">
          Laporan Statistik
        </Text>
      </View>

      <ScrollView className="flex-1 px-5 mt-6" showsVerticalScrollIndicator={false}>
        
        {/* Ringkasan Singkat */}
        <View className="flex-row gap-3 mb-6">
            <View className="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm items-center">
                <Ionicons name="people" size={24} color="#3B82F6" />
                <Text className="text-2xl font-bold text-black mt-1">1.2k</Text>
                <Text className="text-xs text-gray-400">Total Peserta</Text>
            </View>
            <View className="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm items-center">
                <Ionicons name="trending-up" size={24} color="#10B981" />
                <Text className="text-2xl font-bold text-black mt-1">+12%</Text>
                <Text className="text-xs text-gray-400">Kenaikan Mingguan</Text>
            </View>
        </View>

        {/* --- SECTION 1: KATEGORI TERPOPULER --- */}
        <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-6">
            <View className="flex-row items-center mb-4">
                <Ionicons name="grid" size={20} color="#374B4A" style={{marginRight: 8}} />
                <Text className="text-lg font-bold text-black">Minat Kategori</Text>
            </View>
            
            {categoryStats.map((item, index) => (
                <StatBar key={index} {...item} />
            ))}
        </View>

        {/* --- SECTION 2: JENIS EVENT TERPOPULER --- */}
        <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-8">
            <View className="flex-row items-center mb-4">
                <Ionicons name="pricetags" size={20} color="#374B4A" style={{marginRight: 8}} />
                <Text className="text-lg font-bold text-black">Jenis Event Populer</Text>
            </View>
            
            {typeStats.map((item, index) => (
                <StatBar key={index} {...item} />
            ))}
        </View>

        {/* Tombol Download (Visual Saja) */}
        <TouchableOpacity 
            className="flex-row items-center justify-center bg-white border border-secondary p-4 rounded-xl mb-10 active:bg-gray-50"
            activeOpacity={0.7}
        >
            <Ionicons name="download-outline" size={20} color="#000" style={{ marginRight: 8 }} />
            <Text className="font-bold text-black">Unduh Laporan Lengkap (PDF)</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Reports;