


import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBUTHThzOleHF1ldYuPhbIj8gPjVq1GG_4",
  authDomain: "login-and-signup-e38ca.firebaseapp.com",
  projectId: "login-and-signup-e38ca",
  storageBucket: "login-and-signup-e38ca.appspot.com",
  messagingSenderId: "921897394923",
  appId: "1:921897394923:web:aa69fa36da500ae20594ae",
  measurementId: "G-2XEEMF1ZXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export { app, auth };