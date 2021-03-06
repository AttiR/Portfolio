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

  // About Section

  section: {
    padding: theme.spacing(10, 0, 8, 0),
  },

  divider: {
    width: '64px',
    height: '4px',
    backgroundColor: '#2E3B55',
  },

  responsiveImg: {
    width: '100%',
    height: 'auto',
  },
  AvatarCont: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#2E3B55',
    color: 'white',
  },
  headingMedia: {
    fontWeight: 'bolder',
    color: '#fb8c00',
  },

  // heading component
  sectionHeadingCont: {
    padding: theme.spacing(1),
  },

  // PortFolio

  portfolioSection: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 0, 8, 0),
  },

  cardGrid: {
    padding: '20px 5px',
    marginTop: '30px',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: '1',
  },

  // Contact
  contactSection: {
    padding: theme.spacing(10, 0, 8, 0),
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  //drewer style
  drawer: {
    width: '250px',
    height: '100vh',
  },
  drawerContainer: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#2E3B55',
  },
  listItem: {
    color: 'white',
  },

  // Footer
  footer: {
    backgroundColor: '#2E3B55',
    padding: '50px',
    color: '#fff',
    position: 'relative',
  },
  iconButton: {
    position: 'absolute',
    right: 10,
    top: -30,
    backgroundColor: '#2E3B55',
    color: '#fff',
  },
}));
