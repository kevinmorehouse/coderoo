import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar position='sticky' color='primary'>
        <Toolbar>Coderoo</Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;
