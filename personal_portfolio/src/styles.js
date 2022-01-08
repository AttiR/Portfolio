import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  // Header
  header: {
    width: '100%',
    minHeight: '90vh',
    height: '90vh',
    backgroundColor: theme.palette.background.paper,
  },

  // Navbar

  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));
