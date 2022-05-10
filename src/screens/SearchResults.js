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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";
import { useState, useEffect }  from 'react';
import { IconButton } from '@mui/material';
import copy from "copy-to-clipboard";  
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { useNavigate, useLocation } from "react-router-dom";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ExploreIcon from '@mui/icons-material/Explore';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import CircularProgress from  '@mui/material/CircularProgress';
import background_img from '../assets/earth_background.jpg';
import ParseLocation from '../utils/geom';

const theme = createTheme();

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function SearchResults() {

  const navParams = useParams();
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [viewMode, setViewMode] = useState("tiles");
  const [searchText, setSearchText] = useState("");
  const [showPb, setShowPb] = useState(false);
  let navigate = useNavigate();
 
  useEffect(() => {
    initResults();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setDefaultResults();
  }

  const setDefaultResults = () => {
    setResults([
      {
          "name": "Spring Sounds",
          "description": "",
          "createdAt": "2022-04-21T11:48:32.659309Z",
          "Owner": {
              "id": "",
              "provider": ""
          },
          "coverImageUri": "https://worldos.s3.amazonaws.com/QmVSUTk9REwrLNWpxJT1oCqhaQysxY4rHpWpPqHPNTkyCn/media/cover.jpg",
          "PinLocation": {
              "lat": 41.495762,
              "lon": -71.304584
          },
          "ipfsCid": "QmeTeZFyJxdUsN8CVmrPENm9dSvD6ebHc3dfmR7x5uPrz1",
          "contractAddr": "0x749c51c256b7BC75F17183d2121f91d15197B87A",
          "walletAddr": "0xff4d7946CabE6662EEBc12d74db83194ca72d18d"
      },
      {
          "name": "Galactic Theatre",
          "description": "",
          "createdAt": "2022-04-29T00:21:12.888078Z",
          "Owner": {
              "id": "",
              "provider": ""
          },
          "coverImageUri": "https://worldos.s3.amazonaws.com/QmYJYdNy3kCY874KzhonAwueQzdZtL3QWayWKecmfhocGc/media/cover.jpg",
          "PinLocation": {
              "lat": 41.730236,
              "lon": -71.282497
          },
          "ipfsCid": "QmcpVjmk4RkbciaYJKY1w17LnwShtc8orUEiuD3rdArhWH",
          "contractAddr": "",
          "walletAddr": ""
      }
    ])
  }

  // look for /contract/:contractAddr from app or /search from the front page
  const initResults = () => {

    //conractAddr 0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804
    //41.4901, -71.3128
    //Spring Sounds

    if (location.pathname.startsWith("/contract")) {

      let { contractAddr } = navParams;
      setSearchText("contract : " + contractAddr);
      getResults(contractAddr, null, null, null);
      return;

    } else if (location.pathname.startsWith("/search/location")) {
      
      let { searchText } = navParams;
      let [x, y, err] = ParseLocation(searchText);
      if (!err) {
        setSearchText(`location : ${x}, ${y}`);
        getResults(null, null, x, y)
        return;
      }
    }
      
    let { searchText } = navParams;
    setSearchText(searchText);
    getResults(null, searchText, null, null)  
  }

  const updateByText = () => {
    let [x, y, err] = ParseLocation(searchText);
    if (!err) {
      getResults(null, null, x, y);
      return;
    } else if (searchText.startsWith("0x")) {
      getResults(searchText, null, null, null);
      return;
    }
    getResults(null, searchText, null, null);
  }

  const updateByLocation = () => {
    setShowPb(true);
    navigator.geolocation.getCurrentPosition(function(position) {
      setShowPb(false);
      let x = position.coords.latitude;
      let y = position.coords.longitude;
      setSearchText(`location : ${x}, ${y}`);
      getResults(null, null, x, y)
    });
  }  

  const getResults = (contractAddr, text, lat, lon) => {

    let url = "https://worldos.cloud/v1/object/search";
    let body = {}

    if (contractAddr) {

      body = {"matchExpressions": [ {"key": "contract", "operator": "equal", "values": [contractAddr] } ] }

    } else if (text) {

      body = {"matchExpressions": [ {"key": "name", "operator": "equal", "values": [text] } ] }

    } else if (lat && lon) {

      body = {"matchExpressions": [ {"key": "location", "operator": "equal", "values": [lat.toString(), lon.toString()] } ] }

    } else {
      // error
      console.log("ERROR: unknown search criteria")
      return
    }

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
       })
      .then((response) => {
        if (!response.ok) {
          handleError();
        }
        else {
          return response.json();
        }
      })
      .then((data) => {
        if (data && data?.results) {
          let dataFixed = []
          let uniques = {}
          for (var i = 0; i < data.results.length; i++) {
            if (data.results[i]["coverImageUri"].includes("cover")) {
              let r = data.results[i];
              if (r.ipfsCid in uniques) {
                continue
              }
              dataFixed.push(r);
              uniques[r.ipfsCid] = true;
            }
          }
          if (dataFixed.length > 0) {
            setResults(dataFixed);
            return
          }
        }
        console.log("using default search results")
        setDefaultResults();
      },
      (error) => {
        handleError(); 
      }
    ); 
  }

  const handleReports = () => {
    navigate("/report");
  }

  return (
    <div style={{ height: "100vh", display: "flex", "flexDirection": "column" }}>
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
                  <Button variant="contained" fullWidth onClick={updateByText}>Search</Button>
                </Grid>
                <Grid item xs={5} md={2}>
                  <Button variant="contained" fullWidth onClick={updateByLocation}>By Location</Button>
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
      <Grid>{ showPb ? <CircularProgress /> : "" }</Grid>

      { viewMode==="explore" ?

      <div style={{ width: '100%', height: '100%', position: 'relative', top: '1px' }}>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
        <MapContainer center={[41.5, -71.5]} zoom={9} scrollWheelZoom={false} style={{ height: 480, width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

            {results.map((result) => (
            <Marker
              key={result.contractAddr}
              position={[result['PinLocation']['lat'], result['PinLocation']['lon']]}
              eventHandlers={{
                click: () => {
                  console.log("marker clicked");
                }
              }}
            />))}
        </MapContainer>
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
              <Grid item key={result.ipfsCid} xs={12} sm={9} md={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      //https://source.unsplash.com/random
                      //                    alt="random"
                    }}
                    image={result["coverImageUri"]}
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
                        World
                      </Typography>
                    </Box>
                    <Box>
                      <Typography noWrap>
                        Questori
                      </Typography>
                    </Box>
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
                      {result['PinLocation']['lat']} {result['PinLocation']['lon']}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => {let x=result['PinLocation']['lat']; let y=result['PinLocation']['lon']; navigate(`/map/location:${x},${y}`)}}>Explore</Button>
                    <Button size="small" onClick={() => alert("Click to buy or sell")}>Buy/Sell</Button>
                    <Button size="small" onClick={() => navigate("/tracker")}>Tracker</Button>
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