import React from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';
import { useState }  from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { useSearchParams } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import QRCode from "react-qr-code";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Site() {
  const [searchParams] = useSearchParams();
  const [showQr, setShowQr] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return <div>
    <TopBar/>
    <Grid container direction="row" justifyContent="flex-start" alignItems="left" rowGap={2}>
      <Grid item xs={0.2} marginTop={20}>
      </Grid>
      <Grid item xs={11.8} md={7} >
        <Grid container direction="column" justifyContent="flex-start" alignItems="left" rowGap={2}>
          <Grid item mt={2}>
            <Typography gutterBottom variant="h5" component="h2">{searchParams.get("a") === "add" ? "Add " : "Edit "}Site</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Button variant="outlined">Register</Button>
          </Grid>
          <Grid item xs={5} md={5}>
            <TextField
              variant="outlined"
              label="Name"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} md={12} >
            <TextField
              variant="outlined"
              label="Web domain"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} md={12} >
            <TextField
              variant="outlined"
              label="URL/Link"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="outlined">Set location</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="outlined">Make Key</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="outlined" onClick={() => {setShowQr(true)}}>Gen QR Code</Button>
          </Grid>
          <Grid item xs={12} md={12} >
            <QRCode value="test" size={showQr ? 256 : 0}></QRCode>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={handleClick}>Save</Button>
          </Grid>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Saved!
            </Alert>
        </Snackbar>
        </Grid>
      </Grid>
    </Grid>
    <Footer></Footer>
  </div>;
}
