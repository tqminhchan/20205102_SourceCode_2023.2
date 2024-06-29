import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyBOLRYHjXfhk3pJm_s4W9WsQLL4chel9R4",
  authDomain: "doan-9873f.firebaseapp.com",
  projectId: "doan-9873f",
  storageBucket: "doan-9873f.appspot.com",
  messagingSenderId: "270736507281",
  appId: "1:270736507281:web:e92d31bd7428aad4a8da30",
  measurementId: "G-FLTVV4P2DD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase;
export const authentication = getAuth(initializeApp(firebaseConfig))