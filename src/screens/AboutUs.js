import React from 'react';
import { Typography, Grid } from '@mui/material';
import TopBar from '../components/TopBar';

export default function AboutUs() {
  return <div>
    <TopBar/>
    <Grid container direction="row" alignItems="center" rowGap={2}>
      <Grid item xs={0.2} marginTop={20}>
      </Grid>
      <Grid item xs={11.8} md={12}>
        <Grid container direction="column" alignItems="center" rowGap={2}>
          <Grid item mt={10}>
            <Typography gutterBottom variant="h4" component="h2">About Us</Typography>
          </Grid>
          <Grid item mt={2} alignItems="center">
            <Typography gutterBottom variant="h5" component="h2" align="center">
              The World Object Store<br></br>
              Pin, Track, Find World Objects<br></br>
              Copyright © Questori LLC 2022<br></br>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>;
}
