import React from 'react';
import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import { useStyles } from '../../styles';

const AboutCard = ({ label, Desc, Icon }) => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container>
        <Grid item xs={3} className={classes.AvatarCont}>
          <Avatar className={classes.icon}> {Icon}</Avatar>
        </Grid>
        <Grid item xs={9} className={classes.MediaText}>
          <Typography
            variant="body1"
            component="h6"
            gutterBottom
            className={classes.headingMedia}
          >
            {label}
          </Typography>

          <Typography variant="description" gutterBottom>
            {Desc}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCard;
