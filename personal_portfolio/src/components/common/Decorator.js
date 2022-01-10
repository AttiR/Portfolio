import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../styles';

const Decorator = ({ lable, withIcon, Icon, styles }) => {
  const classes = useStyles();
  return (
    <Box className={classes.decorator} style={styles}>
      <Typography variant="span" className={classes.decoratorText}>
        {lable}
      </Typography>
      {withIcon ? (
        <Typography variant="span" className={classes.arrow}>
          {Icon}
        </Typography>
      ) : null}
    </Box>
  );
};

export default Decorator;
