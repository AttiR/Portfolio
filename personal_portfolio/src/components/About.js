import React from 'react';
import { Box, Container, CssBaseline, Grid, Hidden } from '@material-ui/core';
import Heading from './common/Heading';
import image from '../images/image4.jpg';
import AboutCard from './common/AboutCard';
import WebIcon from '@material-ui/icons/Web';

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
                alt=" ABOUT ME"
                className={classes.responsiveImg}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Heading
              smallText="ABOUT ME"
              heading="I am Atti Rehman"
              description="With a diverse Engineering backround, a dynamic Web-developer skillled at developing complex solutions, posessing strong creative thinking skills, high energy and integrity. I offer expertise in web Development technologies like React, Node, PHP, Python, Database and Azure cloud services."
            />
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <AboutCard
                  label="Web Development"
                  Desc="Full stack Web Development, expertise in MERN Stack, Python and PHP."
                  Icon={<WebIcon />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <AboutCard
                  label="Web Development"
                  Desc="Full stack Web Development, expertise in MERN Stack, Python and PHP."
                  Icon={<WebIcon />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <AboutCard
                  label="Web Development"
                  Desc="Full stack Web Development, expertise in MERN Stack, Python and PHP."
                  Icon={<WebIcon />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <AboutCard
                  label="Web Development"
                  Desc="Full stack Web Development, expertise in MERN Stack, Python and PHP."
                  Icon={<WebIcon />}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
