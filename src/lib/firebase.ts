import { initializeApp, getApp, getApps } from "firebase/app";
import {
  initializeAuth,
  indexedDBLocalPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQcV6DitbJm1Z7NhGJaOJ6Utom7_PWvcg",
  authDomain: "react-app-starter-67533.firebaseapp.com",
  projectId: "react-app-starter-67533",
  storageBucket: "react-app-starter-67533.appspot.com",
  messagingSenderId: "265559749853",
  appId: "1:265559749853:web:5267637dbf8899b7191734",
  measurementId: "G-Y2Q1RBDEF1",
};

// Initialize Firebase

let firebaseApp;
if (getApps().length) {
  firebaseApp = getApp();
} else {
  firebaseApp = initializeApp(firebaseConfig);
}
export const app = firebaseApp;

// Firebase Auth functions
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";
export const auth = initializeAuth(firebaseApp, {
  persistence: [
    indexedDBLocalPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
  ],
});

// Firebase Firestore functions
export {
  getFirestore,
  onSnapshot,
  doc,
  query,
  collection,
  addDoc,
  serverTimestamp,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const firestore = getFirestore(firebaseApp);
