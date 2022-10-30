import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const roomId =
    location.pathname.length > 1
      ? location.pathname.match(/[^(?:/room/)].*/g)[0]
      : "";

  return (
    <>
      <AppBar
        position='absolute'
        color='default'
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Link
            variant='button'
            href='/'
            sx={{
              my: 1,
              mx: 1.5,
              textDecoration: "none",
              color: "black",
              fontSize: "18px",
            }}
          >
            Coderoo
          </Link>
          <Typography variant='button' color='primary'>
            {roomId ? "Current Room: " + roomId : ""}
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;
