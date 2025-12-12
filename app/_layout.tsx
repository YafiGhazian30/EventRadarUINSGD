import { Stack } from "expo-router";
import { AuthProvider } from '@/context/AuthContext';
import './globals.css';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="events/[id]" options={{ presentation: 'card' }} />
        {/* Tambahkan halaman Chat */}
        <Stack.Screen name="chat" /> 
        <Stack.Screen name="(admin)" />
      </Stack>
    </AuthProvider>
  );
}