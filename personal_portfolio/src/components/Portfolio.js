import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';

import image1 from '../images/project1.jpg';
import image2 from '../images/project2.jpg';
import image3 from '../images/project3.jpg';

import { useStyles } from '../styles';
import Heading from './common/Heading';

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box className={classes.portfolioSection} id="Portfolio">
      <CssBaseline />
      <ScrollAnimation animateIn="fadeIn">
        <Grid
          container
          style={{
            displa: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Grid item xs={12} sm={8}>
            <Heading
              smallText="PORTFOLIO"
              heading="Projects"
              alignCenter="true"
              description="Projects Porttfolio"
            />
          </Grid>

          <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card className={classes.card}>
                  <a
                    href="https://github.com/AttiR/Ayna-Fashion_Ecommerce_plateform"
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={image1}
                      title="image title"
                    />
                  </a>
                  <CardContent className={classes.CardContent}>
                    <a
                      href="https://github.com/AttiR/Ayna-Fashion_Ecommerce_plateform"
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        style={{ color: '#fb8c00', margin:'10px auto' }}
                      >
                        Ayna's Fashion
                      </Typography>
                    </a>

                    <Typography>
                      Ayna's Fashion is Ecommerece Platform built with MERN
                      Stack and Redux.{' '}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="primary">View Details</Button>
                    <a
                      href="https://ayna-fashion.herokuapp.com/"
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      <Button color="primary" style={{ marginLeft: '50px' }}>
                        Live Preview
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card className={classes.card}>
                  <a
                    href="https://github.com/AttiR/EChatCode"
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={image2}
                      title="image title"
                    />
                  </a>
                  <CardContent className={classes.CardContent}>
                    <a
                      href="https://github.com/AttiR/EChatCode"
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        style={{ color: '#fb8c00' }}
                      >
                        EChatCode
                      </Typography>
                    </a>

                    <Typography>
                      Web coding forum, Dynamic Website built with JavaScript,
                      PHP, and MySQL.{' '}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      href="https://github.com/AttiR/EChatCode"
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      <Button color="primary">View Details</Button>{' '}
                      <a
                        href="https://attir.azurewebsites.net/"
                        rel="noreferrer"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                      >
                        <Button color="primary" style={{ marginLeft: '50px' }}>
                          Live Preview
                        </Button>
                      </a>
                    </a>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card className={classes.card}>
                  <a
                    href="https://github.com/AttiR/Gymkhana-gladiators-cc"
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={image3}
                      title="image title"
                    />
                  </a>
                  <CardContent className={classes.CardContent}>
                    <a
                      href="https://github.com/AttiR/Gymkhana-gladiators-cc"
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        style={{ color: '#fb8c00' }}
                      >
                        Gymkhana-gladiator-cc
                      </Typography>
                    </a>

                    <Typography>
                      Dynamic Website for local club using Flask , Python,
                      JavaScript, PostGreSQL.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      href="https://github.com/AttiR/Gymkhana-gladiators-cc"
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      <Button color="primary">View Details</Button>
                      <a
                        href="https://helsinki-gymkhana-cc.herokuapp.com/"
                        rel="noreferrer"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                      >
                        <Button color="primary" style={{ marginLeft: '50px' }}>
                          Live Preview
                        </Button>
                      </a>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <center>
          <a
            href="https://github.com/AttiR"
            aria-details="git hub link"
            rel="noreferrer"
            target="_blank"
          >
            <Button
              size="large"
              style={{
                backgroundColor: '#2E3B55',
                color: 'white',
                marginTop: '50px',
              }}
            >
              Explore All
            </Button>
          </a>
        </center>
      </ScrollAnimation>
    </Box>
  );
};

export default Portfolio;
