import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDy10t9_h7abt0vAiGpoYAcfxp1L4JSQsc",
    authDomain: "hot-spicy-restaurant-17d39.firebaseapp.com",
    projectId: "hot-spicy-restaurant-17d39",
    storageBucket: "hot-spicy-restaurant-17d39.appspot.com",
    messagingSenderId: "199712677042",
    appId: "1:199712677042:web:1b82a36b810a15be02fdab",
    measurementId: "G-NE55410W43",
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig);
};

export default initializeAuthentication;
