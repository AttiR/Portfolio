import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from '../styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Personal PortFolio
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        &copy; 2022_Atti
      </Typography>
    </footer>
  );
};

export default Footer;
