import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from '../styles';
import { Link } from 'react-scroll';

const DrawerComponent = ({ initialState, handleDrawerToogler, navlinks }) => {
  const classes = useStyles();
  return (
    <div>
      <Drawer
        anchor="left"
        open={initialState}
        onClose={handleDrawerToogler}
        className={classes.drawer}
      >
        <Box className={classes.drawerContainer}>
          <List style={{ paddingTop: '30px' }}>
            {navlinks.map((item, i) => (
              <ListItem key={i}>
                <Link to={`${item.id}`}>
                  <Button>
                    <ListItemText className={classes.listItem}>
                      {item.label}
                    </ListItemText>
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
