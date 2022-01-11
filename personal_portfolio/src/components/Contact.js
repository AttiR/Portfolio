import { Box, CssBaseline, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../styles';
import Heading from './common/Heading';

const Contact = () => {
  const classes = useStyles();
  return (
    <Box className={classes.contactSection} id="Contact">
      <CssBaseline />
      <Grid
        container
        style={{
          displa: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Grid item xs={12} sm={8}>
          <Heading
            smallText="Contact"
            heading="Contact ME"
            alignCenter="true"
            description="Cell: +358440458080  Email: atti.rehmman@gmail.com"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
