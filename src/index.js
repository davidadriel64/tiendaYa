import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw9k5L73G32AvgGOSTzaT-foIGIvW4_uA",
  authDomain: "ecommerce-react-67850.firebaseapp.com",
  projectId: "ecommerce-react-67850",
  storageBucket: "ecommerce-react-67850.appspot.com",
  messagingSenderId: "745939957099",
  appId: "1:745939957099:web:b4a3d7bef982b712d0882e"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

