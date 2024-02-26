import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getFirestore,
    query,
    collection,
    where,
    getDocs,
    doc,
    setDoc,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSJixoaAa7l-RysXvaWp7jjoDTG_3p_G0",
    authDomain: "taptune-2.firebaseapp.com",
    projectId: "taptune-2",
    storageBucket: "taptune-2.appspot.com",
    messagingSenderId: "72806584618",
    appId: "1:72806584618:web:f7c4713c9a81be3daa4e53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

export { db, query, collection, where, getDocs, setDoc, doc, onSnapshot };