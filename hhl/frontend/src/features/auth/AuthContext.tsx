import { createContext, useState, useCallback, type ReactNode } from 'react';
import type { User, UserRole } from '../../types';
import { getUserByRole } from '../../data';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (role: UserRole) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((role: UserRole) => {
    const mockUser = getUserByRole(role);
    if (mockUser) {
      setUser(mockUser);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: user !== null,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
