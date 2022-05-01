import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Questori LLC
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {

  return (
    <Box sx={{ bgcolor: 'background.paper', p: 1, m: 10 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        SP8L
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Pin, Track, Find World Objects
      </Typography>
      <Copyright />
    </Box>
  );
}