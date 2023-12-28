import { Stack } from '@mui/material';
import React from 'react';
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <Stack direction="row" align-items="centre"
    justifyContent="center"
    gap={1}>
        <FaRegCopyright />
        Tech Troopers
    </Stack>
  );
}

export default Footer;