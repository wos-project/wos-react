import React from 'react';
import { Link, Typography, Box, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Switch from '@mui/material/Switch';
import copy from "copy-to-clipboard";  
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export default function Tracker() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  return <div>
    <TopBar/>
    <Grid container direction="row" justifyContent="flex-start" alignItems="left" rowGap={2}>
      <Grid item xs={0.2} marginTop={20}>
      </Grid>
      <Grid item xs={11.8} md={7} >
        <Grid container direction="column" justifyContent="flex-start" alignItems="left" rowGap={2}>
          <Grid item mt={2}>
            <Typography gutterBottom variant="h5" component="h2">Tracker</Typography>
          </Grid>

          <Grid item mt={2}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="left" rowGap={2}>
              <Grid item mt={2}>
                <Box
                  component="img"
                  sx={{
                    height: 100,
                    width: 100,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  src={"https://source.unsplash.com/random?auto=format&w=350&dpr=2"}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction="row" columnGap={3} alignItems="center">
            <Grid>
              <Link
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ marginLeft: 6 }}
                  href="/report"
                >
                  Reports
              </Link>
            </Grid>
            <Grid>
              Off <Switch defaultChecked /> On
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} >
            <TextField
              variant="outlined"
              label="NFT Address"
              InputProps={{
                readOnly: true,
              }}
              value="0xcd89adf9b9ef1270d89adf9b9ef127"
              fullWidth
            ></TextField>
          </Grid>

          <Grid item xs={12} md={12} >
            <TextField
              variant="outlined"
              label="Created"
              InputProps={{
                readOnly: true,
              }}
              value="April 2, 2022"
              
            ></TextField>
          </Grid>

          <Grid item xs={12} md={12} >
            <TextField
              variant="outlined"
              label="Last Hit Date"
              InputProps={{
                readOnly: true,
              }}
              value="April 30, 2022"
              
            ></TextField>
          </Grid>

          <Grid item xs={12} md={12} >
          <TextField
              variant="outlined"
              label="Hits"
              InputProps={{
                readOnly: true,
              }}
              value="234"
              
            ></TextField>
            <Button variant="outlined">Test</Button>
          </Grid>

          <Grid item xs={12} md={12} >
            URL 
            <IconButton onClick={() => {copy("https://tk.worldos.earth/track/0xcd89adf9b9ef1270d89adf9b9ef127")}}>
              <ContentCutIcon fontSize='small'></ContentCutIcon>
            </IconButton>
          </Grid>
          <Grid item xs={12} md={12} >
            <Item>
              https://tk.worldos.earth/track/0xcd89adf9b9ef1270d89adf9b9ef127
            </Item>
          </Grid>

          <Grid item xs={12} md={12} >
          </Grid>

          <Grid item xs={12} md={12} >
            HTML Snippet
            <IconButton onClick={() => {copy("https://tk.worldos.earth/tid/0xcd89adf9b9ef1270d89adf9b9ef127")}}>
              <ContentCutIcon fontSize='small'></ContentCutIcon>
            </IconButton>
          </Grid>
          <Grid item xs={12} md={12} >
            <Item>
              {"<!-- WOS tag -->"}<br/>
              {"<script async src='https://tk.worldos.earth/tid/js?id=0xcd89adf9b9ef1270d89adf9b9ef127'"}<br/>
              {" window.dataLayer=window.dataLayer||[]"}<br/>
              {" function tk(){dataLayer.push(arguments);}"}<br/>
              {" tk('js',new Date());"}<br/>
              {" tk('config','0xcd89adf9b9ef1270d89adf9b9ef127'"}<br/>
              {"</script>"}<br/>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Footer></Footer>
  </div>;
}
