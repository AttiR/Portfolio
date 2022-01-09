import { Box,  Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../styles';

const Decorator = ({ lable, Icon }) => {
  const classes = useStyles();
  return (
    <Box className={classes.decorator}>
      <Typography variant="span" className={classes.decoratorText}>
        {lable}
      </Typography>
      <Typography variant="span" className={classes.arrow}>
        {Icon}
      </Typography>
    </Box>
  );
};

export default Decorator;
