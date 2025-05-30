// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjAjz5NZXjKFayOoR61uiEUsMydND1tKw",
  authDomain: "foodapp-8a4e1.firebaseapp.com",
  projectId: "foodapp-8a4e1",
  storageBucket: "foodapp-8a4e1.firebasestorage.app",
  messagingSenderId: "233520028463",
  appId: "1:233520028463:web:4547baab9a2419fbba1fda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);