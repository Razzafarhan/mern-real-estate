// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-f30df.firebaseapp.com",
  projectId: "mern-real-estate-f30df",
  storageBucket: "mern-real-estate-f30df.appspot.com",
  messagingSenderId: "755600245000",
  appId: "1:755600245000:web:30b1829593baa80a1becbd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
