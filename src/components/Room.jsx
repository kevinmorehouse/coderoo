import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import { useParams } from "react-router-dom";

const Room = () => {
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");
  const [html, setHtml] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const { roomId } = useParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `);
    }, 200);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const handleHtmlChange = (changedValue) => {
    setHtml(changedValue);
  };
  const handleCssChange = (changedValue) => {
    setCss(changedValue);
  };
  const handleJsChange = (changedValue) => {
    setJs(changedValue);
  };

  return (
    <div className='room-container'>
      <p>You are in room: {roomId}</p>
      <div className='pane-container'>
        <div className='pane editor-pane'>
          <Editor
            roomId={roomId}
            mode='xml'
            displayName='html'
            value={html}
            onChange={handleHtmlChange}
          />
          <Editor
            roomId={roomId}
            mode='css'
            displayName='css'
            value={css}
            onChange={handleCssChange}
          />
          <Editor
            roomId={roomId}
            mode='javascript'
            displayName='javascript'
            value={js}
            onChange={handleJsChange}
          />
        </div>
        <div className='pane iframe-pane'>
          <p className='iframe-pane-header'>Output</p>
          <iframe
            srcDoc={srcDoc}
            title='output'
            sandbox='allow-scripts'
            height='100%'
            width='100%'
            frameBorder='0'
            style={{ border: "1px solid black" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Room;
