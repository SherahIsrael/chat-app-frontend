import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Rex from '../../assets/images/Rex.webp';
import Navigation from '../Shared/Navigation';
  
const Home = () => {
  const StartChatBtn = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
    background: 'blueviolet',
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '80px',
    paddingRight: '80px',
    borderRadius: '60px',
    fontSize: '20px'
  };  

  return (
    <Stack spacing={2} justifyContent="center"
    alignItems="center">
      <Navigation />
      <div className="homeImage">
        <img src={Rex} width={300}
        style={{ alignSelf: "center" }}
        className="homeRex" alt="Rex" />
      </div>
      <h1>Welcome to ReX Chat!</h1>
      <h2>Receive Career Help from ReX!</h2>
      <h4>Start a conversation with ReX right now!</h4>
      <Link style={StartChatBtn} to="/chat">Start Chatting</Link>
    </Stack>
  );
}
  
export default Home;