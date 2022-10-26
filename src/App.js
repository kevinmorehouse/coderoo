import "./App.css";
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const App = () => {
  const [text, setText] = useState("");

  const messageRef = ref(database, "strings/");

  const writeString = (str) => {
    set(ref(database, "strings/"), {
      message: str,
    });
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
    writeString(text);
  };

  useEffect(() => {
    onValue(messageRef, (snapshot) => {
      const data = snapshot.val();
      setText(data.message);
    });
  });

  return (
    <div className='App'>
      <textarea value={text} onChange={handleChange}></textarea>
    </div>
  );
};

export default App;
