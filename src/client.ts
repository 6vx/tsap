import * as sapper from "@sapper/app"; // eslint-disable-line import/no-unresolved

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

let db = firebase.firestore();

sapper.start({
	target: document.querySelector("#sapper"),
	props: {
		firebase: firebase,
	}

});
