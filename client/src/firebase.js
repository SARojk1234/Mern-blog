// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-948f3.firebaseapp.com",
  projectId: "mern-blog-948f3",
  storageBucket: "mern-blog-948f3.appspot.com",
  messagingSenderId: "699145321233",
  appId: "1:699145321233:web:42fc0381a71f43d7dbeab0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);