"use client";

import { createContext, useContext, useState, useSyncExternalStore, ReactNode } from "react";
import { User, AuthState } from "../types/auth";
import { storage } from "../lib/storage";

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function getInitialState(): AuthState {
  const user = storage.getUser();
  return user
    ? { user, isAuthenticated: true, isLoggingOut: false }
    : { user: null, isAuthenticated: false, isLoggingOut: false };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>(getInitialState);

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const login = (email: string, password: string) => {
    const user: User = { email, password };
    storage.saveUser(user);
    setAuthState({ user, isAuthenticated: true, isLoggingOut: false });
  };

  const register = (email: string, password: string) => {
    const user: User = {
      email,
      password,
      registeredAt: new Date().toISOString(),
    };
    storage.saveUser(user);
    setAuthState({ user, isAuthenticated: true, isLoggingOut: false });
  };

  const logout = () => {
    storage.removeUser();
    setAuthState({ user: null, isAuthenticated: false, isLoggingOut: true });
  };

  if (!mounted) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
