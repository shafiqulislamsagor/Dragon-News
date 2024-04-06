// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZnpsStzTaLEc07o5dk_wMzJIm34m8avI",
    authDomain: "dragon-news-19146.firebaseapp.com",
    projectId: "dragon-news-19146",
    storageBucket: "dragon-news-19146.appspot.com",
    messagingSenderId: "436761563069",
    appId: "1:436761563069:web:790d9e76b2d4b091ceccd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)

export default Auth;