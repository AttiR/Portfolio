import React from 'react';
import { Box, CssBaseline, Typography } from '@material-ui/core';
import Decorator from './Decorator';
import { useStyles } from '../../styles';

export const Divider = () => {
  const classes = useStyles();
  return <div className={classes.divider}></div>;
};

const Heading = ({ heading, description, aligncenter }) => {
  const classes = useStyles();

  return (
    <Box>
      <CssBaseline />
      <Decorator
        lable="About Me"
        withIcon="false"
        styles={aligncenter ? { width: '100px', margin: '10px auto' } : ''}
      />
      <Typography
        variant="h4"
        align={aligncenter ? 'center' : 'left'}
        className={classes.headingTitle}
      >
        {heading}
      </Typography>
      {Divider()}
      <Typography
        variant="body1"
        align={aligncenter ? 'center' : 'left'}
        component="h6"
        className={classes.headingDescription}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Heading;
