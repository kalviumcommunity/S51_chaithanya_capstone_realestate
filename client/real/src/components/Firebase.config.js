// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHTmaVE0dqVrCVtYeozhXsbIwbneMaU5Q",
  authDomain: "real-estate-dcb7b.firebaseapp.com",
  projectId: "real-estate-dcb7b",
  storageBucket: "real-estate-dcb7b.appspot.com",
  messagingSenderId: "880772314138",
  appId: "1:880772314138:web:8edc97981e8426a57c0da3",
  measurementId: "G-JH5RG6KNWY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth;