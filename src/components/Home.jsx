import React from "react";
import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
import tutoring from "../assets/tutoring_edit.png";

const Home = () => {
  return (
    <Grid2 container justifyContent='center' padding={"20px"}>
      <Grid2 xs display='flex'>
        <Container maxWidth='sm' fixed>
          <Typography
            className='text-gradient'
            variant='h1'
            sx={{
              fontWeight: 600,
              fontSize: "calc(22px + 2vw)",
            }}
          >
            Coderoo is a real-time collaborative IDE designed specifically for
            tech educators who teach young coders.
          </Typography>
          <p
            style={{
              fontFamily: "Roboto Mono",
              fontWeight: 300,
              fontSize: "calc(14px + 0.5vw)",
            }}
          >
            Click below to begin creating a space where you and your students
            can code together in <b>Javascript</b>, <b>HTML</b>, and <b>CSS</b>{" "}
            right away—from anywhere in the world!
          </p>
          <br />
          <Link to={"/join-room"}>
            <button className='hero-button'>
              Click here to get started 😄
            </button>
          </Link>
        </Container>
      </Grid2>
      <Grid2 xs={5} display={{ xs: "none", md: "block" }}>
        <Container maxWidth='md' fixed>
          <img src={tutoring} alt='By vectorjuice on Freepik' width={"100%"} />
        </Container>
      </Grid2>
    </Grid2>
  );
};

export default Home;
