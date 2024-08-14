import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ensure you're using react-router-dom
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styles from './Authentication.module.css'; // Ensure this path is correct
import axios from 'axios';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password
      });
      
      // Assuming the token is returned on successful login
      const { token } = response.data;
      console.log(response.data)
      // Store token in localStorage or context for future requests
      localStorage.setItem('token', token);
      console.log("success")
      // Navigate to the dashboard or another page
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="authenticationBox">
      <Box
        component="main"
        sx={{
          maxWidth: '510px',
          ml: 'auto',
          mr: 'auto',
          padding: '50px 0 100px',
        }}
      >
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Box>
            <Typography as="h1" fontSize="28px" fontWeight="700" mb="5px">
              Sign In{' '}
              <img
                src="/images/favicon.png"
                alt="favicon"
                className={styles.favicon}
              />
            </Typography>

            <Typography fontSize="15px" mb="30px">
              Already have an account?{' '}
              <Link
                to="/authentication/sign-up"
                className="primaryColor text-decoration-none"
              >
                Sign up
              </Link>
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: '30px',
              }}
            >
              <a href="#" className={styles.googleBtn}>
                <img src="/images/google-icon.png" alt="Google icon" />
                Sign in with Google
              </a>

              <a href="#" className={styles.fbBtn}>
                <img src="/images/fb-icon.png" alt="Facebook icon" />
                Sign in with Facebook
              </a>
            </Box>

            <div className={styles.or}>
              <span>or</span>
            </div>

            {error && <Typography color="error" mb="20px">{error}</Typography>}

            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Box
                sx={{
                  background: '#fff',
                  padding: '30px 20px',
                  borderRadius: '10px',
                  mb: '20px',
                }}
                className="bg-black"
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      component="label"
                      sx={{
                        fontWeight: '500',
                        fontSize: '14px',
                        mb: '10px',
                        display: 'block',
                      }}
                    >
                      Email
                    </Typography>

                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      component="label"
                      sx={{
                        fontWeight: '500',
                        fontSize: '14px',
                        mb: '10px',
                        display: 'block',
                      }}
                    >
                      Password
                    </Typography>

                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={6} sm={6}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Remember me."
                  />
                </Grid>

                <Grid item xs={6} sm={6} textAlign="end">
                  <Link
                    to="/authentication/forgot-password"
                    className="primaryColor text-decoration-none"
                  >
                    Forgot your password?
                  </Link>
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  textTransform: 'capitalize',
                  borderRadius: '8px',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '12px 10px',
                  color: '#fff !important',
                }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default SignInForm;
