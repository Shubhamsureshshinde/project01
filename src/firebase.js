import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBU-X5EY80WgIjwuF3PyPUByPGSl2uk9DM",
    authDomain: "netflix-clone-ea9c9.firebaseapp.com",
    projectId: "netflix-clone-ea9c9",
    storageBucket: "netflix-clone-ea9c9.appspot.com",
    messagingSenderId: "506971561876",
    appId: "1:506971561876:web:773d281b1dc4110b243981",
    measurementId: "G-G3W9XRFWWR"
}

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth, db };