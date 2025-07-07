import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Mock users for demo purposes
const mockUsers = [
  {
    id: '1',
    email: 'user@example.com',
    name: 'Demo User',
    password: 'password123',
  },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const user = mockUsers.find(
            (u) => u.email === email && u.password === password
          );
          
          if (!user) {
            throw new Error('Invalid email or password');
          }
          
          const { password: _, ...userWithoutPassword } = user;
          
          set({
            user: userWithoutPassword,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'An error occurred',
            isLoading: false,
          });
        }
      },
      
      signup: async (name: string, email: string, password: string) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Check if user already exists
          const existingUser = mockUsers.find((u) => u.email === email);
          
          if (existingUser) {
            throw new Error('User with this email already exists');
          }
          
          // Create new user
          const newUser = {
            id: String(mockUsers.length + 1),
            email,
            name,
            password,
          };
          
          mockUsers.push(newUser);
          
          const { password: _, ...userWithoutPassword } = newUser;
          
          set({
            user: userWithoutPassword,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'An error occurred',
            isLoading: false,
          });
        }
      },
      
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);