import React, { useEffect } from "react";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Ace Editor imports
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-xml";
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
  const { roomId, mode, value, onChange } = props;

  const contentRef = ref(database, `rooms/${roomId}/${mode}`);

  // Listen for changes to content in current room
  useEffect(() => {
    onValue(contentRef, (snapshot) => {
      const data = snapshot.val();
      onChange(data);
    });
  });

  // Handler for updating content in database.
  const updateValueInDatabase = (value) => {
    set(contentRef, value);
  };

  const handleChange = (change) => {
    onChange(change);
    updateValueInDatabase(change);
  };

  return (
    <div className='editor'>
      <AceEditor
        value={value}
        mode={mode}
        theme='cobalt'
        onChange={handleChange}
        width='100%'
        height='50vh'
        name='Editor'
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          highlightActiveLine: true,
          behavioursEnabled: true,
          wrap: true,
          wrapBehavioursEnabled: true,
          tabSize: 2,
          showGutter: true,
          showFoldWidgets: true,
          fadeFoldWidgets: true,
          fontSize: 15,
          displayIndentGuides: true,
          highlightSelectedWord: true,
          useWorker: false,
        }}
      />
    </div>
  );
};

export default Editor;
