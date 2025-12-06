import { Tabs } from 'expo-router';
import React from 'react';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      
      {/* Home (index) diletakkan PALING ATAS agar menjadi default screen saat aplikasi dibuka.
        Gunakan `href: null` untuk menyembunyikannya dari Tab Bar bawah.
      */}
      <Tabs.Screen 
        name="index" 
        options={{
          href: null,
        }} 
      />

      {/* Tab-tab yang ditampilkan di bawah */}
      <Tabs.Screen 
        name="schedule" 
        options={{ title: 'Schedule' }} 
      />
      <Tabs.Screen 
        name="chat" 
        options={{ title: 'Chat' }} 
      />
      <Tabs.Screen 
        name="bookmark" 
        options={{ title: 'Bookmark' }} 
      />
      <Tabs.Screen 
        name="history" 
        options={{ title: 'History Event' }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ title: 'Profile' }} 
      />
    </Tabs>
  );
}

export default TabLayout;