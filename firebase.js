// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwuApbKquUxna3Q1Quv6kwwI0n_8bGwqQ",
  authDomain: "difmllc.firebaseapp.com",
  projectId: "difmllc",
  storageBucket: "difmllc.appspot.com",
  messagingSenderId: "514272782998",
  appId: "1:514272782998:web:7c1bc4a0acce528ad4f0b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
