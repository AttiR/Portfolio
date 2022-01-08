import React from 'react';
import Navbar from './Navbar';
import { Box, Typography, CssBaseline } from '@material-ui/core';
import { useStyles } from '../styles';

const Header = () => {
  const clases = useStyles();
  return (
    <Box className={clases.header}>
      <CssBaseline />
      <Navbar />
    </Box>
  );
};

export default Header;
