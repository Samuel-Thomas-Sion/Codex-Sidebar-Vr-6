import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, browserLocalPersistence, browserSessionPersistence, inMemoryPersistence, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInAnonymously, browserPopupRedirectResolver } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, setDoc, deleteDoc, doc } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

let persistence = [inMemoryPersistence];
try {
  window.localStorage.setItem('__test__', '1');
  window.localStorage.removeItem('__test__');
  persistence = [browserLocalPersistence, browserSessionPersistence, inMemoryPersistence];
} catch (e) {
  console.warn('localStorage not available, falling back to inMemoryPersistence');
}

export const auth = initializeAuth(app, {
  persistence,
  popupRedirectResolver: browserPopupRedirectResolver
});

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

