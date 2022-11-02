import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const roomId =
    location.pathname.length > 1
      ? location.pathname.match(/(?<=\/room\/).*/)
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
            style={{
              textDecoration: "none",
              fontFamily: "Roboto",
              color: "rgba(0, 0, 0, 0.6)",
              marginRight: "1rem",
              padding: "1px",
            }}
            to={"/"}
          >
            CODEROO
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
