import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
import { useRouter, useSegments } from 'expo-router';

// Tipe Role yang tersedia
export type UserRole = 'user' | 'admin' | 'organizer' | null;

interface AuthContextType {
  role: UserRole;
  isLoading: boolean;
  signIn: (role: UserRole) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Hook untuk menggunakan AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// Provider untuk membungkus aplikasi
export function AuthProvider({ children }: PropsWithChildren) {
  const [role, setRole] = useState<UserRole>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    // Simulasi pengecekan token/session saat aplikasi dibuka
    const checkAuth = async () => {
      setIsLoading(true);
      // Di sini nanti bisa cek AsyncStorage atau API
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';
    
    if (!role && !inAuthGroup) {
      // Jika belum login, lempar ke halaman login
      router.replace('/login');
    } else if (role) {
      // Jika sudah login, arahkan sesuai Role
      if (role === 'user' && segments[0] !== '(tabs)') {
        router.replace('/(tabs)'); // Halaman User (yang sudah ada)
      } else if (role === 'admin' && segments[0] !== '(admin)') {
        router.replace('/(admin)'); // Halaman Admin
      } else if (role === 'organizer' && segments[0] !== '(organizer)') {
        router.replace('/(organizer)'); // Halaman Organizer
      }
    }
  }, [role, segments, isLoading]);

  const signIn = (selectedRole: UserRole) => {
    setRole(selectedRole);
  };

  const signOut = () => {
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ role, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}