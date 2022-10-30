import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import { useParams } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Tab } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import "./Room.css";

const Room = () => {
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");
  const [html, setHtml] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const { roomId } = useParams();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <Grid2 container spacing={2}>
      <Grid2 item xs={6}>
        <TabContext value={value}>
          <Box>
            <TabList
              value={value}
              onChange={handleChange}
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
                onChange={handleHtmlChange}
              />
            </TabPanel>
            <TabPanel value='2'>
              <Editor
                roomId={roomId}
                mode='css'
                value={css}
                onChange={handleCssChange}
              />
            </TabPanel>
            <TabPanel value='3'>
              <Editor
                roomId={roomId}
                mode='javascript'
                value={js}
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
            }}
          >
            <p>OUTPUT</p>
          </Box>
          <Box
            sx={{ height: "50vh", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
          >
            <iframe
              srcDoc={srcDoc}
              title='output'
              sandbox='allow-scripts'
              frameBorder='0'
            />
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Room;
