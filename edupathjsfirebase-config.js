// Import Firebase SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore, collection, addDoc, doc, setDoc, getDoc, getDocs, updateDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Your Firebase configuration (REPLACE WITH YOURS FROM STEP 4.2)
const firebaseConfig = {
  apiKey: "AIzaSyDwfL8c__gTuPqPKB3MXyFAbfcCdJspdaY",
  authDomain: "edupath-5752d.firebaseapp.com",
  projectId: "edupath-5752d",
  storageBucket: "edupath-5752d.firebasestorage.app",
  messagingSenderId: "495837552452",
  appId: "1:495837552452:web:9c5a514000899350f18111",
  measurementId: "G-PPM26YQHLR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export for use in other files
export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, collection, addDoc, doc, setDoc, getDoc, getDocs, updateDoc };