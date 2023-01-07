import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

const firebaseConfig = {
  apiKey: "AIzaSyBTPXv5XD0_Vlg2oGmhoc152alVpyyIlSE",
  authDomain: "tiendaderopa-bfb8d.firebaseapp.com",
  projectId: "tiendaderopa-bfb8d",
  storageBucket: "tiendaderopa-bfb8d.appspot.com",
  messagingSenderId: "543187808957",
  appId: "1:543187808957:web:477f993e7c302c3c19fdd4"
};


 initializeApp(firebaseConfig);