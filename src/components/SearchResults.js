import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";
import background_img from '../earth_background.jpg'
import { useState, useEffect }  from 'react';
import TopBar from './TopBar';

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

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function SearchResults() {

  const { searchParam } = useParams();
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState(searchParam);

  useEffect(() => {
    getResults();
  }, [])

  const logoTheme = createTheme({
    typography: {
      fontFamily: [
        'Saira',
      ].join(','),
    },});  

  const getResults = () => {

    //setSearchText("0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804");

    let url = "https://worldos.earth/v1/"
    if (searchText.slice(0,2) == "0x") {
      url += "contract/" + searchText;
    } else {
      // TODO: adjust
      url += "contract/" + searchText;
    }

    fetch(url)
      .then((res) => res.json())
      .then(
          (data) => {
            data["location"] = {"lat": "41.4901", "lon": "-71.3128"}
            let d = [data];
            setResults(d);
          },
          (error) => {
            setError(error);
          }
      );

    setResults([
      {
        "uid":"EXvou1_dRF-ZOs7jeGRCwAfCFu1X7oRGC5rlG9IkVZwACdFvAOf9Sdi7QeeN8nut6g",
        "walletAddr":"0xff4d7946CabE6662EEBc12d74db83194ca72d18d",
        "walletKind":"ropsten.ethereum",
        "ipfsCid":"QmVsYMVuK4oWyvzsFK4Wna6RHM8EbLS2NNmFU3Baf7NoWr",
        "name":"Chinese Tea Room at the Marble House pin",
        "description":"",
        "coverImageUri":"",
        "contractAddr":"0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804",
        "location": {"lat": "41.4901", "lon": "-71.3128"}
      },{
        "uid":"EXvou1_dRF-ZOs7jeGRCwAfCFu1X7oRGC5rlG9IkVZwACdFvAOf9Sdi7QeeN8nut6gmm",
        "walletAddr":"0xff4d7946CabE6662EEBc12d74db83194ca72d18d",
        "walletKind":"ropsten.ethereum",
        "ipfsCid":"QmVsYMVuK4oWyvzsFK4Wna6RHM8EbLS2NNmFU3Baf7NoWr",
        "name":"Chinese Tea Room at the Marble House pin",
        "description":"test123",
        "coverImageUri":"",
        "contractAddr":"0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804",
        "location": {"lat": "41.4901", "lon": "-71.3128"}
      }
    ])  
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <TopBar>
      </TopBar>

      <AppBar position="relative" 
        style={{
          backgroundImage: `url(${background_img})`, 
          height: 150, 
          width: '100%', 
          backgroundPosition: 'center 37%', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat'}}>
          <Toolbar>
          <Box component="div" height="80%" width="100%">
            <Grid container direction="column" justifyContent="flex-center" alignItems="center" rowGap={2}>
              <Grid item xs={12} md={4}>
                <Box component="div">
                  <ThemeProvider theme={logoTheme}>
                    <Typography variant="h5">
                      The World Object Store
                    </Typography>
                  </ThemeProvider>
                </Box>
              </Grid>
              <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <Grid item xs={12} md={5} >
                  <TextField 
                  value={searchText}
                  onChange={e => setSearchText(e.target.value)}
                  hiddenlabel="true"
                  variant="standard"
                  fullWidth
                  sx={{
                    input: {color: "black"},
                    backgroundColor: "white"
                  }}/>        
                </Grid>
                <Grid item xs={5} md={2}>
                  <Button variant="contained" fullWidth onClick={getResults}>Search</Button>
                </Grid>
                <Grid item xs={5} md={2}>
                  <Button variant="contained" fullWidth>By Location</Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 6,
            pb: 0,
          }}
        >
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {results.map((result) => (
              <Grid item key={result.uid} xs={12} sm={9} md={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                    style={{backgroundColor: 'green'}}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {result['name']}
                    </Typography>
                    <Typography>
                      {result['description']}
                    </Typography>
                    <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                      Wallet Address:
                    </Typography>
                    <Typography noWrap>
                      {result['walletAddr']}
                    </Typography>
                    <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                      Wallet Kind:
                    </Typography>
                    <Typography>
                      {result['walletKind']}
                    </Typography>
                    <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                      IPFS CID:
                    </Typography>
                    <Typography noWrap>
                      {result['ipfsCid']}
                    </Typography>
                    <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                      Contract Address:
                    </Typography>
                    <Typography noWrap>
                      {result['contractAddr']}
                    </Typography>
                    <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                      Location:
                    </Typography>
                    <Typography noWrap>
                      {result['location']['lat']} {result['location']['lon']}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Questori
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
      {/* End footer */}
    </ThemeProvider>
  );
}