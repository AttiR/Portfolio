import React from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from 'react-scroll';

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer} id="Footer">
      <IconButton
        className={classes.iconButton}
        to="Header"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1200}
        component={Link}
      >
        <ArrowUpwardIcon />
      </IconButton>
      <Typography variant="h6" align="center" gutterBottom>
        Personal PortFolio
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        &copy; 2022_Atti
      </Typography>
    </Box>
  );
};

export default Footer;
