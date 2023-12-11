// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTG_kR8JWd6LL_gBhzzwMbdsq0WIe0JjE",
  authDomain: "fir-react-8b802.firebaseapp.com",
  projectId: "fir-react-8b802",
  storageBucket: "fir-react-8b802.appspot.com",
  messagingSenderId: "895882800961",
  appId: "1:895882800961:web:acfe05fea0071a6ec73bc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
