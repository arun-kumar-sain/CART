import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";


const firebaseConfig ={
  apiKey: "AIzaSyC-MKJGqLYnsPyjDlPkmhEDZLJRSQj5MG4",
  authDomain: "cart-b7d0f.firebaseapp.com",
  projectId: "cart-b7d0f",
  storageBucket: "cart-b7d0f.appspot.com",
  messagingSenderId: "627162197592",
  appId: "1:627162197592:web:62a8db8a8bfef7818e242d"
};

export const app = initializeApp(firebaseConfig);
const db=getFirestore(app);