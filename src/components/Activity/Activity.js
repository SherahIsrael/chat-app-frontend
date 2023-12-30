import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";

const Activity = () => {
    return (
        <>
        <Stack direction="row" alignItems={'center'}
        gap={2}>
        <Link to="/">
            <FaArrowLeftLong />
        </Link >
        <h1>Activity</h1>
        <CgMoreO />
        </Stack>
        </>
    );
}

export default Activity;