import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect }  from 'react';
import background from '../earth_background.jpg'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function Home() {
  const [searchParam, setSearchParam] = useState("");

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    if (searchParam) {
      let path = '/results/' + searchParam; 
      navigate(path);
    }
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const logoTheme = createTheme({
    typography: {
      fontFamily: [
        'Saira',
      ].join(','),
    },});  
  
  return <div style={{backgroundImage: `url(${background})`, height: '100vh', width: '100vw', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

      <Box component="div" height="10%"></Box>
      <Grid container direction="column" justifyContent="flex-end" alignItems="center" rowGap={2}>
        <Grid item xs={12} md={4} >
          <Box component="div" style={{color: 'white'}}>
            <ThemeProvider theme={logoTheme}>
              <Typography variant="h4">
                The World Object Store
              </Typography>
            </ThemeProvider>
          </Box>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={11} md={5} >
            <TextField 
              hiddenlabel
              variant="standard"
              fullWidth="true"
              onChange={e => setSearchParam(e.target.value)}
              sx={{
                input: {color: "black"},
                backgroundColor: "white"
              }}/>        
            </Grid>
          <Grid item xs={5} md={2}>
            <Button variant="contained" fullWidth="true" onClick={routeChange}>Search</Button>
          </Grid>
        </Grid>
      </Grid>

      </div>;
}
