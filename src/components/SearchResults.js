import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
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


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        WorldOS.earth
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function SearchResults() {

  let { searchParam } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    fetch("https://worldos.earth/v1/contract/0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804")
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setContracts(data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    // Mock the contract data here so we can test
    // Need to hack the cover image URL since is empty
    setContracts([{
      "uid":"EXvou1_dRF-ZOs7jeGRCwAfCFu1X7oRGC5rlG9IkVZwACdFvAOf9Sdi7QeeN8nut6g",
      "walletAddr":"0xff4d7946CabE6662EEBc12d74db83194ca72d18d",
      "walletKind":"ropsten.ethereum",
      "ipfsCid":"QmVsYMVuK4oWyvzsFK4Wna6RHM8EbLS2NNmFU3Baf7NoWr",
      "name":"Chinese Tea Room at the Marble House pin",
      "description":"",
      "coverImageUri":"",
      "contractAddr":"0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804"},
      {
      "uid":"EXvou1_dRF-ZOs7jeGRCwAfCFu1X7oRGC5rlG9IkVZwACdFvAOf9Sdi7QeeN8nut6g",
      "walletAddr":"0xff4d7946CabE6662EEBc12d74db83194ca72d18d",
      "walletKind":"ropsten.ethereum",
      "ipfsCid":"QmVsYMVuK4oWyvzsFK4Wna6RHM8EbLS2NNmFU3Baf7NoWr",
      "name":"Chinese Tea Room at the Marble House pin",
      "description":"",
      "coverImageUri":"",
      "contractAddr":"0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804"}])
  }, [])

  console.log(searchParam)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar position="relative" 
        style={{
          backgroundImage: `url(${background_img})`, 
          height: '10%', 
          width: '100vw', 
          backgroundPosition: 'center', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat'}}>
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            WOS
          </Typography>

          <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 5, width: '35ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Button variant="contained" style={{height: 53}}>Search</Button>
          <TextField id="outlined-basic" variant="outlined" defaultValue={searchParam}/>
        </Box>
      </div>

        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            // bgcolor: 'background.paper',
            bgcolor: 'white',
            pt: 6,
            pb: 0,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{fontWeight: 'bold'}}
            >
              World Objects
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {contracts.map((contract) => (
              <Grid item key={contract} xs={18} sm={9} md={6}>
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
                      {contract['name']}
                    </Typography>
                    <Typography>
                      {contract['description']}
                    </Typography>
                    <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                      Wallet Address:
                    </Typography>
                    <Typography noWrap>
                      {contract['walletAddr']}
                    </Typography>
                    <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                      Wallet Kind:
                    </Typography>
                    <Typography>
                      {contract['walletKind']}
                    </Typography>
                    <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                      IPFS CID:
                    </Typography>
                    <Typography noWrap>
                      {contract['ipfsCid']}
                    </Typography>
                    <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                      Contract Address:
                    </Typography>
                    <Typography noWrap>
                      {contract['contractAddr']}
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
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}