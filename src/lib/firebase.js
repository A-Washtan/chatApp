
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_Firebase_Key,
  authDomain: "reactchat-fd736.firebaseapp.com",
  projectId: "reactchat-fd736",
  storageBucket: "reactchat-fd736.appspot.com",
  messagingSenderId: "506461242885",
  appId: "1:506461242885:web:044897fd31a3435a0efe6c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()