import { Tabs } from 'expo-router';
import React from 'react';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* Tab-tab yang ditampilkan di bawah */}
      <Tabs.Screen 
        name="schedule" 
        options={{ title: 'Schedule' }} 
      />
      <Tabs.Screen 
        name="bookmark" 
        options={{ title: 'Bookmark' }} 
      />
      <Tabs.Screen 
        name="index" 
        options={{ title: 'Home' }} 
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