import React from 'react';
import { Box, CssBaseline, Typography } from '@material-ui/core';
import Decorator from './Decorator';
import { useStyles } from '../../styles';

export const Divider = ({ style }) => {
  const classes = useStyles();
  return <div className={classes.divider} style={style}></div>;
};

const Heading = ({ heading, description, aligncenter, smallText }) => {
  const classes = useStyles();

  return (
    <Box>
      <CssBaseline />
      <Typography style={{ color: 'orange' }}>
        <Decorator
          lable={smallText}
          withIcon="false"
          styles={aligncenter ? { width: '100px', margin: '10px auto' } : {}}
        />
      </Typography>

      <Typography
        variant="h4"
        align={aligncenter ? 'center' : 'left'}
        className={classes.headingTitle}
      >
        {heading}
      </Typography>
      {Divider({
        style: aligncenter ? { margin: '16px auto' } : { margin: '16px 0' },
      })}
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
