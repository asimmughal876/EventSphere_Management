import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, TextField, Button, Grid, Link, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Checkbox, FormControlLabel } from '@mui/material';
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

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState(null);
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    const formData = new FormData();
    formData.append("user_name", name);
    formData.append("user_email", email);
    formData.append("user_pass", password);
    if (image) {
      formData.append("image", image);
    }

    agree ? formData.append("role_id", "2") : formData.append("role_id", "3")

    try {
      const response = await axios.post("http://localhost:8001/signup", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert("Signup successful!");
      console.log(response.data);
      navigate("/login"); // Redirect to login page after successful signup
    } catch (err) {
      alert("Signup failed!");
      console.error(err);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#EF802B', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 5, }}>
      <Container maxWidth="sm">
        <FormContainer>
          <Typography variant="h4" textAlign="center" gutterBottom fontWeight="bold">
            Create Your Account
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" mb={3}>
            Fill in the details below to get started.
          </Typography>
          <form onSubmit={handleSignup} encType="multipart/form-data">
            <StyledField fullWidth placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <StyledField fullWidth placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <StyledField fullWidth placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <StyledField fullWidth placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

            <Box
              component="label"
              htmlFor="image-upload"
              sx={{
                display: 'block',
                cursor: 'pointer',
                padding: '14px 12px',
                backgroundColor: '#f8f9fc',
                border: '1px solid #eee',
                borderRadius: '6px',
                marginBottom: '16px',
                color: '#555',
                '&:hover': {
                  borderColor: '#ddd',
                },
              }}
            >

              {image ? image.name : 'Upload Profile Image'}
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  sx={{
                    color: '#EF802B',
                    '&.Mui-checked': {
                      color: '#EF802B',
                    },
                  }}
                />
              }
              label="Sign up as an Exhibitor?"
              sx={{ marginBottom: '16px' }}
            />


            <StyledButton type="submit" fullWidth>
              Sign Up
            </StyledButton>
          </form>
          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Link href="/login" sx={{ color: '#F84E81', fontWeight: 500 }}>
                Login
              </Link>
            </Typography>
          </Grid>
        </FormContainer>
      </Container>
    </Box>
  );
}
