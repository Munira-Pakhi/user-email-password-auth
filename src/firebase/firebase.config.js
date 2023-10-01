// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD41T1c6Is7fsuXrVjTYLiZy0KoeHoPbWs",
  authDomain: "user-email-password-auth-77fc7.firebaseapp.com",
  projectId: "user-email-password-auth-77fc7",
  storageBucket: "user-email-password-auth-77fc7.appspot.com",
  messagingSenderId: "14288795154",
  appId: "1:14288795154:web:fcc4692d3847393bb34acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
