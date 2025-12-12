import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Preferences = () => {
  const router = useRouter();

  // Data Dummy untuk Pilihan
  const topics = [
    "Sains & Teknologi", "Kajian Islam", "Seni & Budaya", 
    "Olahraga", "Bisnis & Karir", "Kesehatan", 
    "Politik & Hukum", "Lingkungan"
  ];

  const types = [
    "Seminar", "Kuliah Umum", "Workshop", 
    "Lomba / Kompetisi", "Bazaar / Festival", "Konser Musik",
    "Webinar", "Pameran"
  ];

  // State untuk menyimpan pilihan user
  const [selectedTopics, setSelectedTopics] = useState<string[]>(["Sains & Teknologi"]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["Seminar", "Workshop"]);

  // Fungsi Toggle Pilihan
  const toggleSelection = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleSave = () => {
    // Logika simpan ke backend/local storage bisa ditaruh sini
    console.log("Preferensi Disimpan:", { selectedTopics, selectedTypes });
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      
      {/* --- HEADER --- */}
      <View className="flex-row items-center px-6 py-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-black">Preferensi Anda</Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6" contentContainerStyle={{ paddingBottom: 100 }}>
        
        <Text className="text-gray-500 mb-6 leading-5">
          Pilih topik dan tipe event yang Anda sukai. Kami akan merekomendasikan event terbaik untuk Anda.
        </Text>

        {/* --- SECTION 1: TOPIK --- */}
        <View className="mb-8">
          <Text className="text-lg font-bold text-black mb-4">Topik Minat</Text>
          <View className="flex-row flex-wrap gap-3">
            {topics.map((topic, index) => {
              const isSelected = selectedTopics.includes(topic);
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => toggleSelection(topic, selectedTopics, setSelectedTopics)}
                  className={`px-4 py-2 rounded-full border ${
                    isSelected 
                      ? 'bg-secondary border-secondary' 
                      : 'bg-white border-gray-300'
                  }`}
                >
                  <Text className={`font-medium ${isSelected ? 'text-black' : 'text-gray-500'}`}>
                    {topic}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* --- SECTION 2: TIPE EVENT --- */}
        <View className="mb-4">
          <Text className="text-lg font-bold text-black mb-4">Tipe Event</Text>
          <View className="flex-row flex-wrap gap-3">
            {types.map((type, index) => {
              const isSelected = selectedTypes.includes(type);
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => toggleSelection(type, selectedTypes, setSelectedTypes)}
                  className={`px-4 py-2 rounded-full border ${
                    isSelected 
                      ? 'bg-accent border-accent' 
                      : 'bg-white border-gray-300'
                  }`}
                >
                  <Text className={`font-medium ${isSelected ? 'text-white' : 'text-gray-500'}`}>
                    {type}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

      </ScrollView>

      {/* --- FOOTER BUTTON --- */}
      <View className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100">
        <TouchableOpacity 
          onPress={handleSave}
          activeOpacity={0.8}
          className="w-full bg-secondary h-14 rounded-xl items-center justify-center shadow-md"
        >
          <Text className="text-black font-bold text-lg">Simpan Preferensi</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default Preferences;