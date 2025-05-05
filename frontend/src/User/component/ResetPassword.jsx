// ResetPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
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

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const user_email = localStorage.getItem('user_email_for_otp');
  const otpCode = localStorage.getItem('otp_code'); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      console.log('Resetting password for:', user_email, 'with OTP:', otpCode);
      
      const res = await axios.post('http://localhost:8001/reset-password', {
        user_email,
        otpCode,
        newPassword,
      });

      alert(res.data.message || 'Password reset successful');
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert('Error resetting password');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#EF802B', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 5 }}>
      <Container maxWidth="sm">
        <FormContainer>
          <Typography variant="h4" textAlign="center" gutterBottom fontWeight="bold">
            Reset Password
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" mb={3}>
            Enter your new password below.
          </Typography>
          <form onSubmit={handleSubmit}>
            <StyledField
              fullWidth
              placeholder="Enter New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <StyledField
              fullWidth
              placeholder="Confirm New Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <StyledButton type="submit" fullWidth>
              Reset Password
            </StyledButton>
          </form>
        </FormContainer>
      </Container>
    </Box>
  );
};

export default ResetPassword;
