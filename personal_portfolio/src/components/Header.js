import React from 'react';
import Navbar from './Navbar';
import { Box, Typography, CssBaseline } from '@material-ui/core';
import Typed from 'react-typed';
import Decorator from './common/Decorator';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import { useStyles } from '../styles';

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <CssBaseline />
      <Navbar />
      <Box className={classes.headerContainer}>
        <Typography varinat="h3" component="h4" className={classes.headerTitle}>
          I'm a <span style={{ paddingRight: '5px' }}></span>
          <Typed
            strings={[' Full-Stack Webdeveloper,', ' Technical Consultant,']}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
        </Typography>

        <Typography variant="h3" component="h4" className={classes.headerDesc}>
          I create Website and application,
          <br />
          base on your need..
        </Typography>
        <Decorator lable="About Me" Icon={<ArrowDownwardRoundedIcon />} />
      </Box>
    </Box>
  );
};

export default Header;
