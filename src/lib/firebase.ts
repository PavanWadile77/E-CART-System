import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL5fKpSU2p3MFG9eviIAVSp-fPM3Q-j-U",
  authDomain: "ecart-system-4ac83.firebaseapp.com",
  projectId: "ecart-system-4ac83",
  storageBucket: "ecart-system-4ac83.firebasestorage.app",
  messagingSenderId: "946416083991",
  appId: "1:946416083991:web:f96783a34d03f25525e852",
  measurementId: "G-GKRK7R7SZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
