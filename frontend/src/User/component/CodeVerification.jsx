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

export default function CodeVerification() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_email = localStorage.getItem("user_email_for_otp");

    try {
        const response = await axios.post('http://localhost:8001/verify-otp', {
            otp: otp,
            user_email: localStorage.getItem("user_email_for_otp")
          });
          if (response.data.success) {
            alert('OTP verified successfully!');
            localStorage.setItem('otp_code', otp);
            navigate('/reset-password');
          } else {
        alert("You've entered wrong code");
        setOtp('');
      }
    } catch (error) {
      alert("Invalid code!");
      setOtp('');
      console.error(error);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#EF802B', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 5 }}>
      <Container maxWidth="sm">
        <FormContainer>
          <Typography variant="h4" textAlign="center" gutterBottom fontWeight="bold">
            Code Verification
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" mb={3}>
            Enter the 6-digit code sent to your email.
          </Typography>
          <form onSubmit={handleSubmit}>
            <StyledField
              fullWidth
              placeholder='Enter code'
              variant="outlined"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <StyledButton type="submit" fullWidth>
              Submit
            </StyledButton>
          </form>
        </FormContainer>
      </Container>
    </Box>
  );
}
