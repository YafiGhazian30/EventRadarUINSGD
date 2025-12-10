import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
import { useRouter, useSegments } from 'expo-router';

// HAPUS 'organizer' dari sini
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
    const checkAuth = async () => {
      setIsLoading(true);
      // Simulasi cek login
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';
    
    if (!role && !inAuthGroup) {
      router.replace('/login');
    } else if (role) {
      if (role === 'user' && segments[0] !== '(tabs)') {
        router.replace('/(tabs)');
      } else if (role === 'admin' && segments[0] !== '(admin)') {
        router.replace('/(admin)');
      } 
      // LOGIKA REDIRECT ORGANIZER SUDAH DIHAPUS
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