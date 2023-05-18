// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKNogS8C46TnsePWe9mNu0UGw5RUXUovU",
  authDomain: "toy-car-zone-ef9f6.firebaseapp.com",
  projectId: "toy-car-zone-ef9f6",
  storageBucket: "toy-car-zone-ef9f6.appspot.com",
  messagingSenderId: "813036151101",
  appId: "1:813036151101:web:79edbfc6ed5008907aa554"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;