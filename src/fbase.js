import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAeLsc1h6U2Y8jocFqQK7V6MB5vzHo7F74",
  authDomain: "twitter-7a47f.firebaseapp.com",
  projectId: "twitter-7a47f",
  storageBucket: "twitter-7a47f.appspot.com",
  messagingSenderId: "947099971343",
  appId: "947099971343:web:cf2e5a10acd2309ac6987a",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth(); 

