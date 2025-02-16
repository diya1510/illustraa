// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "illustraa-c7aeb.firebaseapp.com",
  projectId: "illustraa-c7aeb",
  storageBucket: "illustraa-c7aeb.firebasestorage.app",
  messagingSenderId: "124337645754",
  appId: "1:124337645754:web:45597cbc482f272d083a83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);