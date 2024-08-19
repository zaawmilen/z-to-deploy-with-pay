// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
