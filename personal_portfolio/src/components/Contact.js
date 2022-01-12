import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Paper,
  Container,
  Button,
  TextField,
  ButtonBase,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from '../styles';
import Heading from './common/Heading';
import emailjs from 'emailjs-com';
import imagec from '../images/image5.png';
import ScrollAnimation from 'react-animate-on-scroll';

const Result = () => {
  return <p style={{ color: 'green' }}>Thank you for you contact.</p>;
};

const Contact = () => {
  const classes = useStyles();

  const [result, showResult] = useState(false);

  const userid = process.env.REACT_APP_USER_ID;
  const templateid = process.env.REACT_APP_TEMPLATE_ID;
  const serviceid = process.env.REACT_APP_SERVICE_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJs
    emailjs.sendForm(serviceid, templateid, e.target, userid).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    showResult(true);
  };

  return (
    <Box className={classes.contactSection} id="Contact">
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
              smallText="CONTACT"
              heading="Contact ME"
              alignCenter="true"
            />
          </Grid>
        </Grid>
        <Container style={{ marginTop: '30px' }}>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="imag" src={imagec} />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs style={{ marginTop: '80px' }}>
                          <Typography gutterBottom variant="subtitle1">
                            <strong>Cell:</strong> +358440458080
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            <strong>Email: </strong> atti.rehmman@gmail.com
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Paper className={classes.paper}>
                  <Container component="main" maxWidth="lg">
                    <CssBaseline />
                    <div className={classes.paper}>
                      {result ? <Result /> : null}
                      <form
                        className={classes.form}
                        noValidate
                        onSubmit={sendEmail}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6} md={6}>
                            <TextField
                              autoComplete="fname"
                              name="firstName"
                              variant="outlined"
                              required
                              fullWidth
                              id="firstName"
                              label="First Name"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              variant="outlined"
                              required
                              fullWidth
                              id="lastName"
                              label="Last Name"
                              name="lastName"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              variant="outlined"
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              variant="outlined"
                              required
                              fullWidth
                              name="message"
                              label="message"
                              type="message"
                              id="meesage"
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          style={{ marginTop: '30px' }}
                        >
                          Contact
                        </Button>
                      </form>
                    </div>
                  </Container>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </ScrollAnimation>
    </Box>
  );
};

export default Contact;
