import React from 'react';
import { Typography, Grid, TextField, Button, Checkbox } from '@mui/material';
import { useState }  from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

export default function NftImport() {
  let navigate = useNavigate();
  const [contractAddr, setContractAddr] = useState("");

  return <div>
    <TopBar/>
    <Grid container direction="row" justifyContent="flex-start" alignItems="left" rowGap={2}>
      <Grid item xs={0.2} marginTop={20}>
      </Grid>
      <Grid item xs={11.8} md={7} >
        <Grid container direction="column" justifyContent="flex-start" alignItems="left" rowGap={2}>
          <Grid item mt={2}>
            <Typography gutterBottom variant="h5" component="h2">Import NFT</Typography>
          </Grid>

          <Grid item xs={5} md={5}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="left" rowGap={2}>
              <Grid item xs={10} md={10}>
                <TextField
                  variant="outlined"
                  label="Contract Address"
                  onChange={e => setContractAddr(e.target.value)}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item xs={2} md={2} justifyContent="center" padding={1}>
                <Button variant="outlined" disabled={!contractAddr}>Import</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={5} md={5}>
            <TextField
              variant="outlined"
              label="Title"
              fullWidth
            ></TextField>
          </Grid>

          <Grid item xs={12} md={12} >
            <TextField
              variant="outlined"
              label="Description"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} md={12} >
            <TextField
              variant="outlined"
              label="Tags"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} md={12} >
            <TextField
              variant="outlined"
              label="Price"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item>
            <Checkbox variant="outlined"></Checkbox>Add Tracker
          </Grid>
          <Grid item>
            <Checkbox variant="outlined"></Checkbox>Pin to Location
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => {navigate("/tracker")}}>Save</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Footer></Footer>
  </div>;
}
