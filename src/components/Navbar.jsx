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
        color='transparent'
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "1.75vw",
              fontWeight: 500,
              marginRight: "10px",
            }}
          >
            <Link style={{ color: "#000", textDecoration: "none" }} to={"/"}>
              <span className='text-gradient-rtl'>&lt;</span>Coderoo{" "}
              <span className='text-gradient-rtl'>/&gt;</span>
            </Link>
          </Typography>
          <Typography variant='body2' color='primary'>
            {roomId ? "Current Room: " + roomId : ""}
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;
