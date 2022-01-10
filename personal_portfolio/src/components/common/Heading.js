import React from 'react';
import { Box, CssBaseline, Typography } from '@material-ui/core';
import Decorator from './Decorator';
import { useStyles } from '../../styles';

export const Divider = ({ style }) => {
  const classes = useStyles();
  return <div className={classes.divider} style={style}></div>;
};

const Heading = ({ heading, description, alignCenter, smallText }) => {
  const classes = useStyles();

  return (
    <Box className={classes.sectionHeadingCont}>
      <CssBaseline />
      <Box style={{ color: 'orange', fontweight: 'bolder' }}>
        <Decorator
          lable={smallText}
          withIcon="false"
          styles={alignCenter ? { width: '100px', margin: '10px  auto' } : {}}
        />
      </Box>

      <Typography
        variant="h4"
        align={alignCenter ? 'center' : 'left'}
        className={classes.headingTitle}
      >
        {heading}
      </Typography>
      {Divider({
        style: alignCenter ? { margin: '16px auto' } : { margin: '16px 0' },
      })}
      <Typography
        variant="body1"
        align={alignCenter ? 'center' : 'left'}
        component="h6"
        className={classes.headingDescription}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Heading;
