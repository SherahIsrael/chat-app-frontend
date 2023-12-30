import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Stack } from '@mui/material';
import { RiSearch2Line } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import RexIcon from '../../assets/images/radical_x_logo.webp';
import { Link } from 'react-router-dom';
import { IoSend } from "react-icons/io5";
  
const Chat = () => {
  const { messages, sendMessage } = useContext(ChatContext);
  
  return (
    <>
    <Stack direction="row" alignItems={'center'}
    gap={2}>
      <Link to="/chatList">
        <FaArrowLeftLong />
      </Link >
      <h1>ReX</h1>
      <RiSearch2Line />
      <CgMoreO />
    </Stack>
    <img src={RexIcon} alt="Rex Icon" 
        style={{ width: '48px',
        height: '48px', margin: '0 20px'}}/>
    <div>
      <input
        type="text"
      />
      <button >
        <IoSend />
      </button>
    </div>
    </>
  );
}
  
export default Chat;