import React, { useState } from 'react';
import Navbar from './Navbar';
import { Box, Typography, CssBaseline, Drawer } from '@material-ui/core';
import Typed from 'react-typed';
import Decorator from './common/Decorator';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import { useStyles } from '../styles';
import DrawerComponent from './DrawerComponent';

const Header = () => {
  const classes = useStyles();
  const [initialState, setInitialState] = useState(false);

  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const navlinks = [
    {
      label: 'Portfolio',
      id: 'Portfolio',
    },
    {
      label: 'About',
      id: 'About',
    },
    {
      label: 'Contact',
      id: 'Contact',
    },
  ];

  return (
    <Box className={classes.header}>
      <CssBaseline />
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />

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
          MERN Stack, Python (Flask), PHP
          <br />
          SQL, MongoDB, Azure..
        </Typography>
        <Decorator
          lable="About Me"
          withIcon="true"
          Icon={<ArrowDownwardRoundedIcon />}
        />
      </Box>
    </Box>
  );
};

export default Header;
