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
import { useStyles } from '../styles';
import Heading from './common/Heading';

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box className={classes.portfolioSection} id="Portfolio">
      <CssBaseline />
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
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="image title"
                />
                <CardContent className={classes.CardContent}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: 'orange' }}
                  >
                    hello
                  </Typography>

                  <Typography>
                 hello
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>View Details</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="image title"
                />
                <CardContent className={classes.CardContent}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: 'orange' }}
                  >
                    hello
                  </Typography>

                  <Typography>
             hello
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>View Details</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="image title"
                />
                <CardContent className={classes.CardContent}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: 'orange' }}
                  >
                    hello
                  </Typography>

                  <Typography>hello</Typography>
                </CardContent>
                <CardActions>
                  <Button>View Details</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <center>
        <Button
          size="large"
          style={{
            backgroundColor: '#2E3B55',
            color: 'white',
            marginTop: '20px',
          }}
        >
          Explore All
        </Button>
      </center>
    </Box>
  );
};

export default Portfolio;
