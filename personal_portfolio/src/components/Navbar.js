import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Hidden,
  IconButton,
} from '@material-ui/core';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import { useStyles } from '../styles';

const Navbar = () => {
  const classes = useStyles();

  const menuHandler = () => {
    console.log('menu clicked');
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Atti Rehman
          </Typography>
          <Box component={Hidden} xsDown>
            <Box>
              <Button color="inherit">About</Button>
              <Button color="inherit">portfolio</Button>
              <Button color="inherit">Contact</Button>
            </Box>
          </Box>

          <Box component={Hidden} smUp>
            <IconButton color="inherit" onClick={menuHandler}>
              <MenuOpenRoundedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
