import React from "react";

// Ace Editor imports
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = (props) => {
  const { mode, value, placeholder, onChange } = props;

  const handleChange = (change) => {
    onChange(change);
  };

  return (
    <div className='editor'>
      <AceEditor
        value={value}
        mode={mode}
        theme='eclipse'
        onChange={handleChange}
        width='100%'
        height='50vh'
        name='Editor'
        placeholder={placeholder}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          highlightActiveLine: true,
          behavioursEnabled: true,
          wrap: true,
          wrapBehavioursEnabled: true,
          tabSize: 2,
          showGutter: true,
          showFoldWidgets: true,
          fadeFoldWidgets: true,
          fontSize: 20,
          fontFamily: "Roboto Mono",
          displayIndentGuides: true,
          highlightSelectedWord: true,
          useWorker: false,
        }}
      />
    </div>
  );
};

export default Editor;
