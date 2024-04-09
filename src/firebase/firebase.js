// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDxTFwwLBUFjpEePFxtYuh_EelMRCyxgI",
  authDomain: "aminul-real-estate.firebaseapp.com",
  projectId: "aminul-real-estate",
  storageBucket: "aminul-real-estate.appspot.com",
  messagingSenderId: "259810807268",
  appId: "1:259810807268:web:0e181a060e375272054bf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth