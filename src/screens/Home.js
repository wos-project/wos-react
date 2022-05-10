import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useRef }  from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from  '@mui/material/CircularProgress';
import background from '../assets/earth_background.jpg'
import TopBar from '../components/TopBar';
import DialogComingSoon from '../components/DialogComingSoon';

export default function Home() {
  const [searchParam, setSearchParam] = useState("");
  const dialogEl = useRef(null);
  const [showPb, setShowPb] = useState(false);
  let navigate = useNavigate(); 

  const logoTheme = createTheme({
    typography: {
      fontFamily: [
        'Saira',
      ].join(','),
    },});  

  const routeSearchParams = () =>{ 
    if (searchParam) {
      navigate("/search/" + searchParam);
    }
  }
  
  const routeSearchLocation = () => {
    setShowPb(true);
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      navigate(`/search/location:${lat},${lon}`);
    });
  }

  return <div style={{backgroundImage: `url(${background})`, height: '100vh', width: '100vw', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
    <TopBar></TopBar>
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
            hiddenlabel="true"
            variant="standard"
            placeholder="Search text, place or contract address"
            fullWidth
            onChange={e => setSearchParam(e.target.value)}
            sx={{
              input: {color: "black"},
              backgroundColor: "white"
            }}/>        
          </Grid>
        <Grid item xs={5} md={2}>
          <Button variant="contained" fullWidth onClick={routeSearchParams}>Search</Button>
        </Grid>
        <Grid item xs={5} md={2}>
          <Button variant="contained" fullWidth onClick={routeSearchLocation}>By Location</Button>
        </Grid>
      </Grid>
      <Grid>{ showPb ? <CircularProgress /> : "" }</Grid>
    </Grid>
    <DialogComingSoon ref={dialogEl}></DialogComingSoon>
    </div>;
}
