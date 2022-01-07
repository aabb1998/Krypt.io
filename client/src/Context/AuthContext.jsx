import React, { useContext, useEffect, useState } from 'react';
const AuthContext = React.useContext();
import { firebase } from 'firebase/app';
import { auth } from '../../firebase';

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  // const signup = (email, password) => {
  //   auth.createUserWithEmailAndPassword(email, password);
  // };

  // auth.onAuthStateChanged((user) => {
  //   setCurrentUser(user);
  // });

  // const value = {
  //   currentUser,
  //   signup,
  // };

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //   });
  //   return unsubscribe;
  // }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
