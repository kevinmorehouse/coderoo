import React from "react";
import { Typography, Button, Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Grid2 container spacing={2} justifyContent='center'>
      <Grid2 width={"40vw"} mt={"5rem"}>
        <Typography variant='h4' component='h1' align='center'>
          Welcome to Coderoo!
        </Typography>
        <br />
        <Typography variant='h5' component='h2'>
          A real-time collaborative IDE designed specifically for tech educators
          who teach young coders.
        </Typography>
        <br />
        <Typography variant='h6' component='p'>
          With Coderoo, you gain the ability to provide a smooth, scaffolded
          learning experience. Simply create a room, and send the link directly
          to your student. In seconds, you can begin teaching them the
          fundamentals of coding in HTML, CSS, and JS, without any of the
          distracting bells and whistles that come with most modern editors.
          Best of all, our real-time editing features allow you to code with
          your student directly, even if they're miles away!
        </Typography>
        <br />
        <Box align='center'>
          <Link to={"/join-room"} style={{ textDecoration: "none" }}>
            <Button variant='contained' sx={{ mt: 3, mb: 2 }}>
              Click here to get started
            </Button>
          </Link>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Home;
