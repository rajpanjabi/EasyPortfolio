// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpF11akewFCZYN1f5Lue-UqDeIFaVjxOw",
  authDomain: "easyportfolio-d201f.firebaseapp.com",
  projectId: "easyportfolio-d201f",
  storageBucket: "easyportfolio-d201f.firebasestorage.app",
  messagingSenderId: "956220553872",
  appId: "1:956220553872:web:08045ebc23f782831ff615",
  measurementId: "G-PHLD3KTN87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 