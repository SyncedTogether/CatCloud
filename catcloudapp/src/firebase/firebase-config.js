// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-60EO_Eih0Wmw_isfZFo4Rg125Y8W2Rw",
    authDomain: "catcloud-b1221.firebaseapp.com",
    projectId: "catcloud-b1221",
    storageBucket: "catcloud-b1221.appspot.com",
    messagingSenderId: "578423769337",
    appId: "1:578423769337:web:eec3eef077cb4a054b7a28",
    measurementId: "G-87CTVN4D83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;