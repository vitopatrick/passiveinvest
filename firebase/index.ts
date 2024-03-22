import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// these are the firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyCn95ZX5Y-zsb1VIoLglJNoLCAr87cpTuc",
  authDomain: "passive-trading.firebaseapp.com",
  projectId: "passive-trading",
  storageBucket: "passive-trading.appspot.com",
  messagingSenderId: "769060413412",
  appId: "1:769060413412:web:66ad9106f0b32c9bd7f1f1",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);