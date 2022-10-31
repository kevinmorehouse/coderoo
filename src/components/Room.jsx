import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import { useParams } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Tab } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import EditorPreview from "./EditorPreview";
import "./Room.css";

// Firebase imports
import { firebaseConfig } from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Firebase init
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Room = () => {
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");
  const [html, setHtml] = useState("");
  const [value, setValue] = useState("1");

  const { roomId } = useParams();
  const jsRef = ref(database, `rooms/${roomId}/javascript`);
  const htmlRef = ref(database, `rooms/${roomId}/xml`);
  const cssRef = ref(database, `rooms/${roomId}/css`);

  // Set up listeners for changes to editor content.
  useEffect(() => {
    onValue(htmlRef, (snapshot) => {
      const data = snapshot.val();
      setHtml(data);
    });

    onValue(cssRef, (snapshot) => {
      const data = snapshot.val();
      setCss(data);
    });

    onValue(jsRef, (snapshot) => {
      const data = snapshot.val();
      setJs(data);
    });
  });

  // Handle changes to editor content.
  const handleHtmlChange = (changedValue) => {
    setHtml(changedValue);
    set(htmlRef, changedValue);
  };

  const handleCssChange = (changedValue) => {
    setCss(changedValue);
    set(cssRef, changedValue);
  };

  const handleJsChange = (changedValue) => {
    setJs(changedValue);
    set(jsRef, changedValue);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 item xs={6}>
        <TabContext value={value}>
          <Box>
            <TabList
              value={value}
              onChange={handleTabChange}
              centered
              selectionFollowsFocus
            >
              <Tab label='HTML' value='1' />
              <Tab label='CSS' value='2' />
              <Tab label='JS' value='3' />
            </TabList>
          </Box>
          <Box
            sx={{
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              paddingBottom: "0px",
            }}
          >
            <TabPanel value='1'>
              <Editor
                roomId={roomId}
                mode='xml'
                value={html}
                placeholder='Enter your HTML here'
                onChange={handleHtmlChange}
              />
            </TabPanel>
            <TabPanel value='2'>
              <Editor
                roomId={roomId}
                mode='css'
                value={css}
                placeholder='Enter your CSS here'
                onChange={handleCssChange}
              />
            </TabPanel>
            <TabPanel value='3'>
              <Editor
                roomId={roomId}
                mode='javascript'
                value={js}
                placeholder='Enter your JS here'
                onChange={handleJsChange}
              />
            </TabPanel>
          </Box>
        </TabContext>
      </Grid2>
      <Grid2 item xs={6}>
        <Box sx={{ height: "100%" }}>
          <Box
            sx={{
              backgroundColor: "white",
              color: "rgba(0, 0, 0, 0.6)",
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: "500",
              padding: "1.75px",
            }}
          >
            <p>OUTPUT</p>
          </Box>
          <Box
            sx={{ height: "50vh", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
          >
            <EditorPreview html={html} css={css} js={js} />
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Room;
