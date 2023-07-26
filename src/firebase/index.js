// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChLjimy1Ow0rAuK1rxs_m_WoDag3icuss",
  authDomain: "blogfolio-b4f76.firebaseapp.com",
  projectId: "blogfolio-b4f76",
  storageBucket: "blogfolio-b4f76.appspot.com",
  messagingSenderId: "265719415354",
  appId: "1:265719415354:web:a511ca52aadf2b5170eb03",
  measurementId: "G-D7S5X4CHHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);