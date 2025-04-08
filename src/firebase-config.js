// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD1i218kzCRpGZFDYt2pCEsKnuAi9KORzc",
    authDomain: "new-firebase-project-9b635.firebaseapp.com",
    projectId: "new-firebase-project-9b635",
    storageBucket: "new-firebase-project-9b635.firebasestorage.app",
    messagingSenderId: "615659162588",
    appId: "1:615659162588:web:744c36d4f2c85f5b1edd19",
    measurementId: "G-P0GKDV8CF0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
