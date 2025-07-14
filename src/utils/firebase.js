// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBoDDJbBEC6trSWU6bUpAebt384mnAXyOg",
  authDomain: "my-proj-86bd0.firebaseapp.com",
  projectId: "my-proj-86bd0",
  storageBucket: "my-proj-86bd0.firebasestorage.app",
  messagingSenderId: "334498258576",
  appId: "1:334498258576:web:ebd6ad3eee5723a21f4215",
  measurementId: "G-W4KXZSBHJN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


export const auth = getAuth();