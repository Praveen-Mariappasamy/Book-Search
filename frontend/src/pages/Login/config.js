import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBqIt7SFYZLeQeJJEFQU9v5tEdvE2uJRA0",
  authDomain: "booksearch-2493c.firebaseapp.com",
  projectId: "booksearch-2493c",
  storageBucket: "booksearch-2493c.appspot.com",
  messagingSenderId: "598221723846",
  appId: "1:598221723846:web:8c61cb7af2bffcc2e01fc7",
  measurementId: "G-2YBLLBTJ78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider};