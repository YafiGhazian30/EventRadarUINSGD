import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
import { useRouter, useSegments } from 'expo-router';

export type UserRole = 'user' | 'admin' | null;

interface AuthContextType {
  role: UserRole;
  isLoading: boolean;
  signIn: (role: UserRole) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [role, setRole] = useState<UserRole>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    // Simulasi cek login
    setTimeout(() => setIsLoading(false), 500); 
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inAdminGroup = segments[0] === '(admin)';
    
    if (!role && !inAuthGroup) {
      // 1. Jika belum login dan bukan di halaman login -> tendang ke login
      router.replace('/login');
    } else if (role === 'user') {
      // 2. Jika USER login:
      // - Jangan biarkan masuk ke halaman (auth) lagi
      // - Jangan biarkan masuk ke halaman (admin)
      // - TAPI, biarkan masuk ke (tabs) atau routes lain seperti /events
      if (inAuthGroup || inAdminGroup) {
        router.replace('/(tabs)');
      }
    } else if (role === 'admin') {
      // 3. Jika ADMIN login:
      // - Pastikan dia berada di folder (admin)
      if (inAuthGroup || !inAdminGroup) {
        router.replace('/(admin)');
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