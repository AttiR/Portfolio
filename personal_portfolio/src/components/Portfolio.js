import React from 'react';
import { Box, CssBaseline, Grid } from '@material-ui/core';
import { useStyles } from '../styles';
import Heading from './common/Heading';

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box className={classes.portfolioSection} id="Portfolio">
      <CssBaseline />
      <Grid
        container
        style={{
          display: 'flex',
          justifyContent: 'center',
          aligncontent: 'center',
        }}
      >
        <Grid item xs={12} sm={8}>
          <center>
            <Heading
              smallText="PORTFOLIO"
              heading="Projects"
              description="Projects Porttfolio"
              aligncenter="true"
            />
          </center>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
