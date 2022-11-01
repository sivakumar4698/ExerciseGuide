

import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../Asssets/Logo.jpg'

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '0px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="0px">
    <Link to="/">
      <img  src={Logo} alt="logo" style={{ width: '300px', height: '150px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Raleway"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#687477', borderBottom: '3px solid #E2C2B3' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#687477' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;