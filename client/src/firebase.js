// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDidXsyjZLrkYH8p_YYr1HT5LtI2aTcXAc',
  authDomain: 'purecryptoio.firebaseapp.com',
  projectId: 'purecryptoio',
  storageBucket: 'purecryptoio.appspot.com',
  messagingSenderId: '512346190670',
  appId: '1:512346190670:web:045ee27736580efca1641f',
  measurementId: 'G-1RYNFYE46D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
