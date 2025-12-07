import { Tabs } from 'expo-router';
import React from 'react';
import { Image, View, ImageSourcePropType } from 'react-native';
import icons from '@/constants/icons';

const TabIcon = ({ icon, focused }: { icon: ImageSourcePropType; focused: boolean }) => {
  if (focused) {
    // Tampilan ketika Tab AKTIF (Menjadi Lingkaran & Mengapung)
    return (
      <View className="items-center justify-center">
        <View 
          className="w-16 h-16 rounded-full items-center justify-center -mt-0"
          style={{ 
            backgroundColor: '#C5FFFD', // Warna Cyan muda saat aktif
            borderWidth: 4,
            borderColor: '#8686AA', // Warna border agar menyatu dengan tab
          }}
        >
          <Image
            source={icon}
            resizeMode="contain"
            style={{ width: 30, height: 30, tintColor: '#21194E' }}
          />
        </View>
      </View>
    );
  }

  // Tampilan ketika Tab TIDAK AKTIF (Normal)
  return (
    <View 
      className="items-center justify-center gap-1"
      style={{ marginTop: 30 }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 26, height: 26, tintColor: '#1A1A2E' }} 
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: '#8686AA', // Warna ungu keabu-abuan
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: 80,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderTopWidth: 0,
            elevation: 0,
        }
      }}
    >
      <Tabs.Screen
        name="schedule"
        options={{
          title: 'Schedule',
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.schedule} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.bookmark} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.history} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.profile} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen 
        name="search" 
        options={{
          title: 'Search',
          href: null,
        }} 
      />

      <Tabs.Screen 
        name="notification" 
        options={{
          title: 'Notification',
          href: null,
        }} 
      />
    </Tabs>
  );
}

export default TabLayout;