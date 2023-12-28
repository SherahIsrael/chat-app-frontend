import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Rex from '../../assets/images/Rex.webp';
  
const Home = () => {

  const StartChatBtn = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
    background: 'blueviolet',
    padding: '25px',
    
  };  

  return (
    <Stack spacing={2} justifyContent="center"
    alignItems="center">
      <div>
        <img src={Rex} width={300}
        style={{ alignSelf: "center" }} alt="Rex" />
      </div>
      <h1>Welcome to ReX Chat!</h1>
      <h2>Receive Career Help from ReX!</h2>
      <h4>Start a conversation with ReX right now!</h4>
      <Link style={StartChatBtn} to="/chat">Start Chatting</Link>
    </Stack>
  );
}
  
export default Home;