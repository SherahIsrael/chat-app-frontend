import React from 'react';
import { Link } from 'react-router-dom';
import ActivityIcon from '../../assets/icons/Activity.webp';
import RexIcon from '../../assets/images/radical_x_logo.webp';
import { PiMessengerLogo } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";
import Stack from '@mui/material/Stack';
  
const Navigation = () => {
  return (
    <Stack direction="row" alignItems="center" 
    justifyContent="flex-start"
    // sx={{ gap: {sm: '122px',
    // xs: '40px'}, mt: { sm: '28px', xs: '16px'}}}
    // px="20px"
    >
      <Link to="/">
        <img src={RexIcon} alt="Rex Icon" 
        style={{ width: '48px',
        height: '48px', margin: '0 20px'}}/>
      </Link>
      <h2>Rex</h2>
      <Stack direction="row" 
      fontSize="24px"
      >
        <Link to="/activity">
          <PiMessengerLogo />
        </Link>
        <Link to="/chatlist">
          <LuSettings />
        </Link>
      </Stack>
    </Stack>
  );
}
 // <img src={ActivityIcon} width="40px" alt="Activity Icon" />
export default Navigation;