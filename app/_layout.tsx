import { Stack } from "expo-router";
import { AuthProvider } from '@/context/AuthContext';
import './globals.css';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Halaman Login/Register */}
        <Stack.Screen name="(auth)" />
        
        {/* Halaman Utama User (Tabs) */}
        <Stack.Screen name="(tabs)" />
        
        {/* Halaman Detail Event (Global) */}
        <Stack.Screen name="events/[id]" options={{ presentation: 'card' }} />
        
        {/* Halaman Admin */}
        <Stack.Screen name="(admin)" />
      </Stack>
    </AuthProvider>
  );
}