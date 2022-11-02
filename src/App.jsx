import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Room from "./components/Room";
import Navbar from "./components/Navbar";
import CreateOrJoinRoom from "./components/CreateOrJoinRoom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/join-room' element={<CreateOrJoinRoom />} />
        <Route path='/room/:roomId' element={<Room />} />
      </Routes>
    </>
  );
};

export default App;
