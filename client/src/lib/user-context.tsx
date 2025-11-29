import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserType = 'guest' | 'active' | 'dormant';

interface UserContextType {
  userType: UserType;
  setUserType: (type: UserType) => void;
  userName: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userType, setUserType] = useState<UserType>('guest');
  const userName = "Alejandro"; // Mock name

  return (
    <UserContext.Provider value={{ userType, setUserType, userName }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
