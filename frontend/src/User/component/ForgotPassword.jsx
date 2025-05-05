import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Paper)({
  padding: '32px',
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
});

const StyledField = styled(TextField)({
  marginBottom: '16px',
  backgroundColor: '#f8f9fc',
  borderRadius: 6,
});

const StyledButton = styled(Button)({
  marginTop: '16px',
  padding: '12px',
  borderRadius: '30px',
  fontWeight: 'bold',
  background: 'linear-gradient(to right, #EF802B, #F84E81)',
  color: '#ffffff',
  textTransform: 'none',
});

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  
      await axios.post('http://localhost:8001/forgot-password', { user_email: email });
  

      alert(`A 6 digit OTP is sent to the email – ${email}`);
      localStorage.setItem("user_email_for_otp", email);

      setEmail('');
      navigate('/code-verification');
      
    } catch (err) {
      console.error(err);
      alert('This email address does not exist!');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#EF802B', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 5 }}>
      <Container maxWidth="sm">
        <FormContainer>
          <Typography variant="h4" textAlign="center" gutterBottom fontWeight="bold">
            Forgot Password
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" mb={3}>
            Enter your email to reset your password.
          </Typography>
          <form onSubmit={handleSubmit}>
            <StyledField
              fullWidth
              placeholder='Enter Email'
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <StyledButton type="submit" fullWidth>
              Continue
            </StyledButton>
          </form>
        </FormContainer>
      </Container>
    </Box>
  );
}
