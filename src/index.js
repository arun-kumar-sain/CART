import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
// import { initializeApp } from 'firebase/app';


// const firebaseConfig ={
//   apiKey: "AIzaSyC-MKJGqLYnsPyjDlPkmhEDZLJRSQj5MG4",
//   authDomain: "cart-b7d0f.firebaseapp.com",
//   projectId: "cart-b7d0f",
//   storageBucket: "cart-b7d0f.appspot.com",
//   messagingSenderId: "627162197592",
//   appId: "1:627162197592:web:62a8db8a8bfef7818e242d"
// };

// export const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 