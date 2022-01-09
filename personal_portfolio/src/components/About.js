import React from 'react';
import { Box, Container, CssBaseline, Grid, Hidden } from '@material-ui/core';
import Heading from './common/Heading';
import image from '../images/image4.jpg';

import { useStyles } from '../styles';

const About = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.section}>
        <CssBaseline />
        <Grid container spacing={3}>
          <Grid item sm={5}>
            <Box component={Hidden} xsDown>
              <img
                src={image}
                alt=" about us"
                className={classes.responsiveImg}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Heading
              heading="I am Atti Rehman"
              description="With diverse Engineering backround, recently graduated from Web Development Training at Omnia."
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
