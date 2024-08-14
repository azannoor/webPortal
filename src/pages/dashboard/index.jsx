import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        maxWidth: '800px',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography variant="body1">
        This is the main dashboard where you can see your information and manage your account.
      </Typography>
    </Box>
  );
};

export default Dashboard;
