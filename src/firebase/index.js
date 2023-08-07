// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
import {
   doc,collection,
  query,orderBy, 
  limit, getDoc, 
  onSnapshot, QuerySnapshot,
  updateDoc, addDoc, 
  deleteDoc, where
   }
   from 'firebase/firestore'
import { getAuth } from "firebase/auth";
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
const email = getFirestore(app)
const auth = getAuth(app);
     const usersCollectionRef= collection(email,'email')


export {
     email,auth, app, usersCollectionRef
}

