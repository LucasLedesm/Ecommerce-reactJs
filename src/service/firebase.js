// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9ahmy-Qtn4K2smIjkEy_8BLRsEMzV7kk",
  authDomain: "ecommerce-react-12fb4.firebaseapp.com",
  projectId: "ecommerce-react-12fb4",
  storageBucket: "ecommerce-react-12fb4.appspot.com",
  messagingSenderId: "133167933541",
  appId: "1:133167933541:web:71eb6c13b8a003bc933e8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app)


export default db;