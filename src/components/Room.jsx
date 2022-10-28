import React from "react";
import Editor from "./Editor";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();

  return (
    <div>
      <p>You are in room: {roomId}</p>
      <Editor roomId={roomId} />
    </div>
  );
};

export default Room;
