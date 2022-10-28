import React from "react";
import Editor from "./Editor";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();

  return (
    <div>
      <p>You are in room: {roomId}</p>
      <Editor roomId={roomId} />
      <Link to={"/"}>Return to homepage</Link>
    </div>
  );
};

export default Room;
