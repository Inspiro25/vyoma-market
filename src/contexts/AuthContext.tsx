
<<<<<<< HEAD
import { createContext, useContext, ReactNode } from 'react';
import { useAuthProvider } from '@/hooks/useAuthProvider';
import { AuthContextType } from '@/types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);
=======
import { createContext, useContext } from 'react';
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth';

const AuthContext = createContext<ReturnType<typeof useSupabaseAuth>>({
  session: null,
  loading: true,
  supabase: null
});

export const AuthProvider = ({ children }) => {
  const auth = useSupabaseAuth();
  
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};
>>>>>>> 0d27cbd (Added new file: filename.ext)

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
<<<<<<< HEAD

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuthProvider();
  
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};
=======
>>>>>>> 0d27cbd (Added new file: filename.ext)
