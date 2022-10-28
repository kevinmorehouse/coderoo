import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [formText, setFormText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${formText}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='room-signup'
          placeholder='Enter a room name'
          value={formText}
          onChange={handleChange}
          required
        ></input>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Home;
