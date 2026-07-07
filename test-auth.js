import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, browserLocalPersistence, browserSessionPersistence, inMemoryPersistence, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInAnonymously, browserPopupRedirectResolver } from 'firebase/auth';
import config from './firebase-applet-config.json' with { type: "json" };
const app = initializeApp(config);
try {
  const auth = initializeAuth(app, {
    persistence: inMemoryPersistence,
    popupRedirectResolver: browserPopupRedirectResolver
  });
  console.log("Success");
} catch(e) {
  console.log("Error:", e);
}
