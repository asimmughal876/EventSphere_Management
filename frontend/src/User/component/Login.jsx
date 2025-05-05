import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, TextField, Button, Grid, Link, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const FormContainer = styled(Paper)({
  padding: '32px',
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
});

const StyledField = styled(TextField)({
  marginBottom: '16px',
  backgroundColor: '#f8f9fc',
  borderRadius: 6,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#eee',
    },
    '&:hover fieldset': {
      borderColor: '#ddd',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#EF802B',
    },
  },
});

const StyledButton = styled(Button)({
  marginTop: '16px',
  padding: '12px',
  borderRadius: '30px',
  fontWeight: 'bold',
  background: 'linear-gradient(to right, #EF802B, #F84E81)',
  color: '#ffffff',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(to right, #e06f23, #e35b70)',
  },
});

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8001/signin", {
        user_email: email,
        user_pass: password,
      });
      alert("Login successful!");
      const token = response.data.token;
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);
      console.log("Decoded token:", decoded);
      if(decoded.role === 2 || decoded.role === 1) {
        navigate("/admin");
      }
      else if(decoded.role === 3) {
        navigate("/userprofile");
      }

    } catch (err) {
      alert("Login failed!");
      console.error(err);
    }
  };

  return (
<Box
  sx={{
    minHeight: '100vh', // FULL height
    backgroundColor: '#EF802B', // background color
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: 5
  }}
>

      <Container maxWidth="sm">
        <FormContainer>
          <Typography variant="h4" textAlign="center" gutterBottom fontWeight="bold">
            Login to Your Account
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" mb={3}>
            Enter your credentials to access your dashboard.
          </Typography>
          <form onSubmit={handleLogin}>
            <StyledField
              fullWidth
              placeholder='Email'
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <StyledField
              fullWidth
              placeholder="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <StyledButton type="submit" fullWidth>
              Login
            </StyledButton>
          </form>

          <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
            <Grid item>
              <Link href="/forgot-password" underline="hover" sx={{ color: '#EF802B', fontWeight: 500 }}>
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Don't have an account?{' '}
                <Link href="/signup" underline="hover" sx={{ color: '#F84E81', fontWeight: 500 }}>
                  Sign Up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </FormContainer>
      </Container>
    </Box>
  );
}
