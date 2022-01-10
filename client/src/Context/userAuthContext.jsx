import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  updateEmail,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password, username) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function updateName(username) {
    return updateProfile(auth.currentUser, {
      displayName: username,
    })
      .then(() => {
        console.log('Profile updated');
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function resetPass(email) {
    return sendPasswordResetEmail(auth, email)
      .then(() => console.log('Password reset sent.'))
      .catch((error) => console.log(error.message));
  }

  function updateUserEmail(email) {
    return updateEmail(auth.currentUser, email)
      .then(() => {
        console.log('Email Updated');
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log('Auth', currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        updateName,
        updateUserEmail,
        resetPass,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
