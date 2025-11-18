// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqR0hWnInE6vQnT7SNbQ9kRj5f0a9QOtU",
  authDomain: "bolchal-3fc82.firebaseapp.com",
  databaseURL: "https://bolchal-3fc82-default-rtdb.firebaseio.com",
  projectId: "bolchal-3fc82",
  storageBucket: "bolchal-3fc82.appspot.com",
  messagingSenderId: "49795660525",
  appId: "1:49795660525:web:0b215e49b929e6b36beae4",
  measurementId: "G-9KV18YELCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();