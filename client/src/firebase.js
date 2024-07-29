// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "real-estate-c264f.firebaseapp.com",
  projectId: "real-estate-c264f",
  storageBucket: "real-estate-c264f.appspot.com",
  messagingSenderId: "927855593597",
  appId: "1:927855593597:web:c8b559ce1200d2c36e0914"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);