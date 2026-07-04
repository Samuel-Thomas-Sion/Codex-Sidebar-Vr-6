import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, browserLocalPersistence, browserSessionPersistence, inMemoryPersistence, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import config from './firebase-applet-config.json' with { type: "json" };
const app = initializeApp(config);
const auth = initializeAuth(app, {
  persistence: [browserLocalPersistence, browserSessionPersistence, inMemoryPersistence]
});
const provider = new GoogleAuthProvider();
try {
  await signInWithPopup(auth, provider);
} catch (e) {
  console.log(e.code, e.message);
}
