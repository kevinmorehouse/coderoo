import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CodeIcon from "@mui/icons-material/Code";

const Home = () => {
  const [formText, setFormText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const text = e.target.value.toLowerCase();
    setFormText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${formText}`);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <CodeIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Create or Join a Room
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='room'
            label='Room Name'
            name='room'
            autoComplete='room'
            autoFocus
            onChange={handleChange}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Enter room
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
