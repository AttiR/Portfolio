import React from 'react';
import { Box, Container, CssBaseline, Grid, Hidden } from '@material-ui/core';
import Heading from './common/Heading';
import image from '../images/image4.jpg';
import AboutCard from './common/AboutCard';
import WebIcon from '@material-ui/icons/Web';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded';
import ScrollAnimation from 'react-animate-on-scroll';

import { useStyles } from '../styles';

const About = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.section} id="About">
        <CssBaseline />
        <ScrollAnimation animateIn="fadeIn">
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
                    label="Full-Stack Development"
                    Desc="Expertise in MERN Stack, Python, Flask, and PHP."
                    Icon={<WebIcon />}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AboutCard
                    label="DataBase"
                    Desc="Expertise on MySQL, PostGreSQL, MongoDB, FireBase"
                    Icon={<StorageRoundedIcon />}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AboutCard
                    label="Cloud Services"
                    Desc="Azure, AWS"
                    Icon={<CloudUploadRoundedIcon />}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AboutCard
                    label="Version Control"
                    Desc="Expertise in Git, GitHub"
                    Icon={<WebIcon />}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Box>
    </Container>
  );
};

export default About;
