import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "wouter";

type UserStatus = "guest" | "logged_in" | "dormant";

interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  status: UserStatus;
}

interface AuthContextType {
  user: User | null;
  status: UserStatus;
  login: (email: string) => void;
  logout: () => void;
  setDormant: () => void; // For demo purposes
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<UserStatus>("guest");
  const [, setLocation] = useLocation();

  // Initialize from local storage for persistence across reloads
  useEffect(() => {
    const storedUser = localStorage.getItem("ivapeo_user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setStatus(parsedUser.status);
    }
  }, []);

  const login = (email: string) => {
    // Mock login logic
    const mockUser: User = {
      id: "u1",
      name: email.split("@")[0] || "Usuario",
      email: email,
      points: 150,
      status: "logged_in",
    };
    setUser(mockUser);
    setStatus("logged_in");
    localStorage.setItem("ivapeo_user", JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    setStatus("guest");
    localStorage.removeItem("ivapeo_user");
    setLocation("/");
  };

  const setDormant = () => {
    if (user) {
      const dormantUser = { ...user, status: "dormant" as UserStatus };
      setUser(dormantUser);
      setStatus("dormant");
      localStorage.setItem("ivapeo_user", JSON.stringify(dormantUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, status, login, logout, setDormant }}>
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
