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

import { Link } from 'react-scroll';

const Navbar = ({ navlinks, handleDrawerToogler }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Atti Rehman
          </Typography>
          <Box component={Hidden} xsDown>
            <Box>
              {navlinks.map((item, i) => (
                <Button
                  key={i}
                  to={`${item.id}`}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  component={Link}
                  color="inherit"
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>

          <Box component={Hidden} smUp>
            <IconButton color="inherit" onClick={handleDrawerToogler}>
              <MenuOpenRoundedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
