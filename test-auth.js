import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, browserLocalPersistence, browserSessionPersistence, inMemoryPersistence, signInAnonymously } from 'firebase/auth';
import config from './firebase-applet-config.json' with { type: "json" };
const app = initializeApp(config);
const auth = initializeAuth(app, {
  persistence: [browserLocalPersistence, browserSessionPersistence, inMemoryPersistence]
});
signInAnonymously(auth).then(user => {
  console.log(user.user.uid);
  process.exit(0);
}).catch(e => {
  console.error(e);
  process.exit(1);
});
