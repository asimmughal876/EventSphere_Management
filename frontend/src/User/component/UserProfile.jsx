import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Typography,
  Button,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Paper)({
  padding: '32px',
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(105, 59, 59, 0.08)',
  textAlign: 'center',
});

function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    avatar: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;  // agar login nahi, kuch na kare

    const decoded = JSON.parse(atob(token.split('.')[1]));
    console.log('Decoded token:', decoded);
    setUser({
      name:  decoded.name,  
      email: decoded.email,
      avatar: decoded.image
        ? `http://localhost:8001/${decoded.image}`
        : '/img/user-profile.png',
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <Box
      sx={{
        minHeight: '40vh',
        backgroundColor: '#EF802B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 5,
      }}
    >
      <FormContainer sx={{ width: '100%', maxWidth: 320 }}>
        <Avatar
          src={user.avatar}
          alt={user.name}
          sx={{ width: 65, height: 65, margin: '0 auto', mb: 2 }}
        />
        <Typography variant="h5" fontWeight="bold">
          {user.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {user.email}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          onClick={handleLogout}
          sx={{
            mt: 2,
            padding: '10px',
            borderRadius: '30px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #EF802B, #F84E81)',
            color: '#ffffff',
            textTransform: 'none',
            '&:hover': {
              background: 'linear-gradient(to right, #e06f23, #e35b70)',
            },
          }}
        >
          Logout
        </Button>
      </FormContainer>
    </Box>
  );
}

export default UserProfile;
