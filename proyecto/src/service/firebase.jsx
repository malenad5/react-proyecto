// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkkZWzF6mgAIjihs021c2wqr-uq71-XzA",
  authDomain: "coder-flex-73870-318bf.firebaseapp.com",
  projectId: "coder-flex-73870-318bf",
  storageBucket: "coder-flex-73870-318bf.firebasestorage.app",
  messagingSenderId: "965964169308",
  appId: "1:965964169308:web:dea1f7b427071ab59de699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)