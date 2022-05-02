// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKUTrgJ5omeuRXTkT-al8c6Sa_78TDa1o",
  authDomain: "firestore-crud-8c18b.firebaseapp.com",
  projectId: "firestore-crud-8c18b",
  storageBucket: "firestore-crud-8c18b.appspot.com",
  messagingSenderId: "16569114293",
  appId: "1:16569114293:web:c8903d34dc639468d028fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);