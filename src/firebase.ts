import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
    apiKey: "AIzaSyB3R69dXqgdT2TsOm_VvBnPrL0a91R2xhs",
    authDomain: "deathmetta.firebaseapp.com",
    databaseURL: "https://deathmetta.firebaseio.com",
    projectId: "deathmetta",
    storageBucket: "deathmetta.appspot.com",
    messagingSenderId: "26891400576",
    appId: "1:26891400576:web:ab3fae747317927d0d7d65",
    measurementId: "G-X4B7FREDZL"
};

firebase.initializeApp(firebaseConfig);

export default firebase;