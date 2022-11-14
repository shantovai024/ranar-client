// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAw5DwDyf9iNWRQzx8Ve5WIKpFFdeM9QM",
  authDomain: "ranar-304e3.firebaseapp.com",
  projectId: "ranar-304e3",
  storageBucket: "ranar-304e3.appspot.com",
  messagingSenderId: "704251082498",
  appId: "1:704251082498:web:789939f79150b0c866f41b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app)
export default auth;