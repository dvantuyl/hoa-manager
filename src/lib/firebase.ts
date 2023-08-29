import {
  initializeApp,
} from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import {
  connectFirestoreEmulator,
  getFirestore,
  initializeFirestore,
} from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';

// Environment variables
import {
  PUBLIC_FIRE_API_KEY,
  PUBLIC_FIRE_AUTH_DOMAIN,
  PUBLIC_FIRE_PROJECT_ID,
  PUBLIC_FIRE_STORAGE_BUCKET,
  PUBLIC_FIRE_MESSAGING_SENDER_ID,
  PUBLIC_FIRE_APP_ID,
  PUBLIC_FIRE_MEASUREMENT_ID,
  PUBLIC_FIRE_USE_EMULATORS
} from '$env/static/public';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: PUBLIC_FIRE_API_KEY,
  authDomain: PUBLIC_FIRE_AUTH_DOMAIN,
  projectId: PUBLIC_FIRE_PROJECT_ID,
  storageBucket: PUBLIC_FIRE_STORAGE_BUCKET,
  messagingSenderId: PUBLIC_FIRE_MESSAGING_SENDER_ID,
  appId: PUBLIC_FIRE_APP_ID,
  measurementId: PUBLIC_FIRE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

initializeFirestore(app, {
  experimentalForceLongPolling: !!PUBLIC_FIRE_USE_EMULATORS,
});

export const firestore = getFirestore(app);
if (PUBLIC_FIRE_USE_EMULATORS)
  connectFirestoreEmulator(firestore, 'localhost', 8080);

export const auth = getAuth(app);
if (PUBLIC_FIRE_USE_EMULATORS)
  connectAuthEmulator(auth, 'http://localhost:9099');

export const storage = getStorage(app);
if (PUBLIC_FIRE_USE_EMULATORS)
  connectStorageEmulator(storage, 'localhost', 9199);
