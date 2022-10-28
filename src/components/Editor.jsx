import "./Editor.css";
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/ext-language_tools";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Editor = (props) => {
  const [js, setJs] = useState("");
  const { roomId } = props;

  const roomRef = ref(database, `rooms/${roomId}/`);

  // Listen for changes to content in current room
  useEffect(() => {
    onValue(roomRef, (snapshot) => {
      const data = snapshot.val();
      setJs(data.jsContent);
    });
  });

  // Handler for updating JS content in database.
  const updateJS = (content, roomId) => {
    set(roomRef, {
      jsContent: content,
    });
  };

  const handleChange = (change) => {
    setJs(change);
    updateJS(change);
  };

  return (
    <div className='Editor'>
      <AceEditor
        value={js}
        mode='javascript'
        theme='cobalt'
        onChange={handleChange}
        name='Editor'
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          highlightActiveLine: true,
          behavioursEnabled: true,
          wrapBehavioursEnabled: true,
          tabSize: 2,
          showGutter: true,
          showFoldWidgets: true,
          fadeFoldWidgets: true,
          fontSize: 15,
          displayIndentGuides: true,
          highlightSelectedWord: true,
        }}
      />
    </div>
  );
};

export default Editor;
