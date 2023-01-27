// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwXkoqbI4CdToMJBdTAwMWHk4ZpqZ6hLQ",
  authDomain: "todo-list-de066.firebaseapp.com",
  databaseURL: "https://todo-list-de066-default-rtdb.firebaseio.com",
  projectId: "todo-list-de066",
  storageBucket: "todo-list-de066.appspot.com",
  messagingSenderId: "289961110599",
  appId: "1:289961110599:web:46011e6c4e713421921562",
  measurementId: "G-2KN2N74TVX"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };