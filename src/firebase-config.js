import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsikykX76fT-0vcDcHmTo2LxmljegH3SI",
  authDomain: "social-media-c5d4b.firebaseapp.com",
  projectId: "social-media-c5d4b",
  storageBucket: "social-media-c5d4b.appspot.com",
  messagingSenderId: "528258608204",
  appId: "1:528258608204:web:61c4b14fc60c0117d918e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();