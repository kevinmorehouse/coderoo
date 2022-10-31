import React, { useState, useEffect } from "react";

const EditorPreview = (props) => {
  const [srcDoc, setSrcDoc] = useState("");
  const { html, css, js } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html === null ? "" : html}</body>
        <style>${css === null ? "" : css}</style>
        <script>${js === null ? "" : js}</script>
      </html>
    `);
    }, 200);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <iframe
      srcDoc={srcDoc}
      title='output'
      sandbox='allow-scripts'
      frameBorder='0'
    />
  );
};

export default EditorPreview;
