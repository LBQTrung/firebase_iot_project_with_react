// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBn2TsD7OoHzN5ymwuebiNqT451fizlb4o",
    authDomain: "esp32-4757a.firebaseapp.com",
    databaseURL: "https://esp32-4757a-default-rtdb.firebaseio.com",
    projectId: "esp32-4757a",
    storageBucket: "esp32-4757a.appspot.com",
    messagingSenderId: "1080854412082",
    appId: "1:1080854412082:web:c5b27bd59ccbcfa1f0f52b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app)

export default database