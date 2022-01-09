import { makeStyles } from '@material-ui/core';
import Image from './images/image3.jpg';

export const useStyles = makeStyles((theme) => ({
  // Header
  header: {
    width: '100%',
    minHeight: '90vh',
    height: 'auto',
    background: `linear-gradient(to bottom right,#04303140, #00606473),url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
  },

  // Navbar

  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },

  // HeaderContainer
  headerContainer: {
    width: '85%',
    minHeight: '90vh',
    height: 'auto',
    display: 'flex',
    padding: '20px',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    fontFamily: 'roboto',
  },

  headerTitle: {
    fontSize: '3rem',
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  headerDesc: {
    fontSize: '2rem',
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      margin: theme.spacing(2, 0),
    },
  },

  decorator: {
    display: 'flex',
    fontWeight: 'bolder',
    position: 'relative',
    marginTop: '20px',
    '&:before': {
      width: '45px',
      height: '45px',
      backgroundColor: '#2E3B55',
      content: '" "',
      borderRadius: '50%',
    },
  },

  decoratorText: {
    lineHeight: '45px',
    position: 'absolute',
    left: '25px',
  },

  arrow: {
    lineHeight: '50px',
    position: 'absolute',
    left: '95px',
    animation: 'upDown',
    animationDuration: '0.7s',
    animationIterationCount: 'infinite',
  },

  //creating the animations
  '@global': {
    '@keyframes upDown': {
      '0%': {
        transform: 'scale(1,1)',
        paddingTop: '0px',
      },
      '100%': {
        transform: 'scale(1,2)',
        paddingTop: '10px',
      },
    },
  },
}));
