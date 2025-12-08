import { Slot } from "expo-router";
import { AuthProvider } from '@/context/AuthContext';
import './globals.css';

export default function RootLayout() {
  return (
    // AuthProvider akan menangani logika redirect (User -> Tabs, Admin -> Admin Page, dll)
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}