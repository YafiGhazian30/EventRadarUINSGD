import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native'; // Hapus jika tidak digunakan

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="index" 
        options={{ title: 'Home' }} 
      />
      <Tabs.Screen 
        name="search" 
        options={{ title: 'Search' }} 
      />
      <Tabs.Screen 
        name="bookmarked" 
        options={{ title: 'Bookmarked' }} 
      />
      <Tabs.Screen 
        name="notification" 
        options={{ title: 'Notification' }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ title: 'Profile' }} 
      />
    </Tabs>
  );
}

export default TabLayout;