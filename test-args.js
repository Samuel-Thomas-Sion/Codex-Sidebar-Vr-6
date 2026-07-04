import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, browserLocalPersistence, browserSessionPersistence, inMemoryPersistence, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import config from './firebase-applet-config.json' with { type: "json" };
const app = initializeApp(config);
const auth = initializeAuth(app, {
  persistence: [browserLocalPersistence, browserSessionPersistence, inMemoryPersistence]
});
const provider = new GoogleAuthProvider();
try {
  await signInWithPopup(null, provider);
} catch (e) {
  console.log("null auth:", e.code);
}
try {
  await signInWithPopup(auth, null);
} catch (e) {
  console.log("null provider:", e.code);
}
try {
  await signInWithPopup(auth, {});
} catch (e) {
  console.log("empty object provider:", e.code);
}
