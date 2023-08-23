// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhNWjrigWUuTjzwHmtx5WJiNUVeFBQ_og",
  authDomain: "my-first-firebase-54bd6.firebaseapp.com",
  projectId: "my-first-firebase-54bd6",
  storageBucket: "my-first-firebase-54bd6.appspot.com",
  messagingSenderId: "944455702502",
  appId: "1:944455702502:web:39107baf32347903b1a827"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export default app;