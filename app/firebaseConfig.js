// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpdBzySqhbwZQpWrMfvcFtaMUeb27kgac",
  authDomain: "timestamp-9b27f.firebaseapp.com",
  projectId: "timestamp-9b27f",
  storageBucket: "timestamp-9b27f.appspot.com",
  messagingSenderId: "63206519336",
  appId: "1:63206519336:web:8d7d322132b9f34fd6fb1d",
  measurementId: "G-1HE187YPYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);