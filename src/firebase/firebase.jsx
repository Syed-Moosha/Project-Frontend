// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "email-tool-e8594.firebaseapp.com",
  projectId: "email-tool-e8594",
  storageBucket: "email-tool-e8594.appspot.com",
  messagingSenderId: "575698865552",
  appId: "1:575698865552:web:6241fe16eac0240e8c3715",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider =  new GoogleAuthProvider(app)