// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
const firebaseConfig = {
  apiKey: "AIzaSyBp2BFFkaZOoZvfVHqJxNKd89HezUCyoXs",
  authDomain: "netflixgpt-d0d95.firebaseapp.com",
  projectId: "netflixgpt-d0d95",
  storageBucket: "netflixgpt-d0d95.firebasestorage.app",
  messagingSenderId: "349709234647",
  appId: "1:349709234647:web:6d6a45606cb2a4601f9b92",
  measurementId: "G-E6H65KKY46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();