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
import { useState, useEffect }  from 'react';
import { IconButton } from '@mui/material';
import copy from "copy-to-clipboard";  
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { useNavigate } from "react-router-dom";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ExploreIcon from '@mui/icons-material/Explore';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import GoogleMapReact from 'google-map-react';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import Tooltip from '@mui/material/Tooltip';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import background_img from '../assets/earth_background.jpg'


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
  const [viewMode, setViewMode] = useState("tiles");

  useEffect(() => {
    getResults();
  }, [])

  const handleViewMode = (event, newMode) => {
    setViewMode(newMode);
  };

  const logoTheme = createTheme({
    typography: {
      fontFamily: [
        'Saira',
      ].join(','),
    },});  

  const handleError = () => {
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

  const getResults = () => {

    //setSearchText("0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804");

    let url = "https://worldos.earth/v1/"
    if (searchText.slice(0,2) === "0x") {
      url += "contract/" + searchText;
    } else {
      // TODO: adjust
      url += "contract/" + searchText;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          handleError();
        }
        else {
          return response.json();
        }
      })
      .then((data) => {
          data["location"] = {"lat": "41.4901", "lon": "-71.3128"}
          let d = [data];
          setResults(d);
        },
        (error) => {
          setError(error);
          handleError(); 
        }
      ); 
  }

  let navigate = useNavigate();
  const handleReports = () => {
    navigate("/report");
  }

  const AnyReactComponent = ({ text }) => <div>
  <Tooltip title="arc1">
    <PersonPinCircleIcon/>
  </Tooltip>
  </div>;

  return (
    <div style={{ height: "100vh", display: "flex", "flex-direction": "column" }}>
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
      <ToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={handleViewMode}
        aria-label="view mode"
      >
        <ToggleButton value="tiles" aria-label="tiles">
          <FilterNoneIcon />
        </ToggleButton>
        <ToggleButton value="explore" aria-label="explore">
          <ExploreIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      { viewMode=="explore" ?

      <div style={{ width: '100%', height: '100%', position: 'relative', top: '1px' }}>
        <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyDOXXyDtcn9LAJ97zIhOZxu_w7X1Z72OzE" }}
              defaultCenter={{lat: 41.5, lng: -71.3}}
              defaultZoom={12}
            >

            <AnyReactComponent lat={41.5} lng={-71.3}></AnyReactComponent>

        </GoogleMapReact>
      </div> :

      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 1,
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
                    <Box>
                      <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                        Wallet Address
                      </Typography>
                      <IconButton onClick={() => {copy(result['walletAddr'])}}>
                        <ContentCutIcon fontSize='small'></ContentCutIcon>
                      </IconButton>
                    </Box>
                    <Box>
                      <Typography noWrap>
                        {result['walletAddr']}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                        Wallet Kind
                      </Typography>
                      <Typography>
                        {result['walletKind']}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                        IPFS CID
                      </Typography>
                      <IconButton onClick={() => {copy(result['ipfsCid'])}}>
                        <ContentCutIcon fontSize='small'></ContentCutIcon>
                      </IconButton>
                    </Box>
                    <Typography noWrap>
                      {result['ipfsCid']}
                    </Typography>
                    <Box>
                      <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                        Contract Address
                      </Typography>
                      <IconButton onClick={() => {copy(result['contractAddr'])}}>
                        <ContentCutIcon fontSize='small'></ContentCutIcon>
                      </IconButton>
                    </Box>
                    <Typography noWrap>
                      {result['contractAddr']}
                    </Typography>
                    <Typography variant="caption" sx={{fontWeight: 'bold'}}>
                      Location
                    </Typography>
                    <Typography noWrap>
                      {result['location']['lat']} {result['location']['lon']}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => navigate("/map")}>Explore</Button>
                    <Button size="small" onClick={() => alert("Click to buy or sell")}>Buy/Sell</Button>
                    <Button size="small" onClick={() => alert("Click to add a tracker")}>Track</Button>
                    <Button size="small" onClick={handleReports}>Stats</Button>
                    <Button size="small" onClick={() => alert("Click to show in-app if available")}>In-App</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main> 
      }
      <Footer></Footer>
    </ThemeProvider>
    </div>
  );
}