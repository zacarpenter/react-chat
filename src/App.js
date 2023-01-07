import React from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase-firestore";
import "firebase-auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAfjxqMhKzMqnGmdMh2rCHKcqS31BiOiaQ",

  authDomain: "react-chat-8384b.firebaseapp.com",

  projectId: "react-chat-8384b",

  storageBucket: "react-chat-8384b.appspot.com",

  messagingSenderId: "101001841717",

  appId: "1:101001841717:web:24d83b3357706599ba757c",

  measurementId: "G-T2JBFDMYYM",
});

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
