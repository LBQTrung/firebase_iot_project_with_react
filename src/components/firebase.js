// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFicGLHKK9t7uCRquvzOzheDqy5XWqr3U",
    authDomain: "testtemperature-a5658.firebaseapp.com",
    databaseURL: "https://testtemperature-a5658-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testtemperature-a5658",
    storageBucket: "testtemperature-a5658.appspot.com",
    messagingSenderId: "378498714326",
    appId: "1:378498714326:web:84633bb7b58d0953361777"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app)

export default database