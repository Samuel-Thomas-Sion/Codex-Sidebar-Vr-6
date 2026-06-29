import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, setDoc, deleteDoc, doc } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseCollection = collection;
window.firebaseOnSnapshot = onSnapshot;
window.firebaseSetDoc = setDoc;
window.firebaseDeleteDoc = deleteDoc;
window.firebaseDoc = doc;
window.signInWithPopup = signInWithPopup;
window.GoogleAuthProvider = GoogleAuthProvider;
window.firebaseOnAuthStateChanged = onAuthStateChanged;
window.signInAnonymously = signInAnonymously;
