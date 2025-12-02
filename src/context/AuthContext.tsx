import React, { createContext, useContext, useEffect, useState } from 'react';

export interface AuthUser {
  id: string;
  email: string;
  username?: string;
  avatar?: string;
  provider: 'local' | 'google' | 'firebase';
  createdAt: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  signUp: (email: string, password: string, username?: string) => Promise<AuthUser>;
  signIn: (email: string, password: string) => Promise<AuthUser>;
  signInWithGoogle: () => Promise<AuthUser>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const USERS_KEY = 'playx_users_v1';
const CURRENT_USER_KEY = 'playx_current_user_v1';

function getStoredUsers(): Array<any> {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function setStoredUsers(users: Array<any>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function createLocalUser(email: string, password: string, username?: string): AuthUser {
  const id = `u_${Date.now()}`;
  const user = {
    id,
    email,
    username: username || email.split('@')[0],
    avatar: `/assets/avatars/${Math.floor(Math.random() * 6) + 1}.jpg`,
    provider: 'local' as const,
    createdAt: new Date().toISOString(),
    // store password for mock auth (INSECURE: only for demo/local use)
    __password: password
  } as any;

  const users = getStoredUsers();
  users.push(user);
  setStoredUsers(users);
  // remove password from returned user
  const { __password, ...publicUser } = user;
  return publicUser as AuthUser;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    if (raw) {
      try {
        const u = JSON.parse(raw) as AuthUser;
        setUser(u);
      } catch (e) {
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  async function signUp(email: string, password: string, username?: string) {
    setLoading(true);
    // simple duplicate check
    const users = getStoredUsers();
    if (users.find((u: any) => u.email === email)) {
      setLoading(false);
      return Promise.reject(new Error('Email already registered'));
    }

    const newUser = createLocalUser(email, password, username);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
    setUser(newUser);
    setLoading(false);
    return newUser;
  }

  async function signIn(email: string, password: string) {
    setLoading(true);
    const users = getStoredUsers();
    const found = users.find((u: any) => u.email === email && u.__password === password);
    if (!found) {
      setLoading(false);
      return Promise.reject(new Error('Invalid credentials'));
    }
    const { __password, ...publicUser } = found;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(publicUser));
    setUser(publicUser as AuthUser);
    setLoading(false);
    return publicUser as AuthUser;
  }

  async function signInWithGoogle() {
    setLoading(true);
    // Optional Firebase integration: if firebase config/env is present we could use it.
    // For now provide a local mocked Google auth flow.
    try {
      // mock user
      const id = `g_${Date.now()}`;
      const mockUser: AuthUser = {
        id,
        email: `google_user_${Date.now()}@playx.local`,
        username: `google_user_${Math.floor(Math.random() * 1000)}`,
        avatar: `/assets/avatars/${Math.floor(Math.random() * 6) + 1}.jpg`,
        provider: 'google',
        createdAt: new Date().toISOString()
      };
      // persist in users list if not exists
      const users = getStoredUsers();
      users.push({ ...mockUser });
      setStoredUsers(users);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(mockUser));
      setUser(mockUser);
      setLoading(false);
      return mockUser;
    } catch (e) {
      setLoading(false);
      return Promise.reject(e);
    }
  }

  async function signOut() {
    setLoading(true);
    localStorage.removeItem(CURRENT_USER_KEY);
    setUser(null);
    setLoading(false);
  }

  const value: AuthContextValue = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuthContext must be used within AuthProvider');
  return ctx;
}

export default AuthContext;
