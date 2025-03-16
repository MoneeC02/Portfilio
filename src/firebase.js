// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8cvbd_D1APrqvBSQZgERQ_FfiBTVeHcQ",
  authDomain: "portofilio-dbb4e.firebaseapp.com",
  projectId: "portofilio-dbb4e",
  storageBucket: "portofilio-dbb4e.firebasestorage.app",
  messagingSenderId: "857258204305",
  appId: "1:857258204305:web:8763163a2cee80e04af330",
  measurementId: "G-XKP2P6JKM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);