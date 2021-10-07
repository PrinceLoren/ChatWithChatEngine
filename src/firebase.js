import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAYGOFz-ACsZozeZ6imTzP8MyL6rIy3SYA",
    authDomain: "daniilchat.firebaseapp.com",
    projectId: "daniilchat",
    storageBucket: "daniilchat.appspot.com",
    messagingSenderId: "561065996565",
    appId: "1:561065996565:web:92ddab40a56ebf4977b91c"
}).auth();