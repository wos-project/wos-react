import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect }  from 'react';
import background from '../earth_background.jpg'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Home() {
  const [searchParam, setSearchParam] = useState("");


  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    if (searchParam) {
      let path = '/results/' + searchParam; 
      navigate(path);
    }
  }


  return <div style={{backgroundImage: `url(${background})`, height: '100vh', width: '100vw', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh', flexDirection: 'column'}}>
        <Box component="div" style={{color: 'white', fontSize: 50, fontWeight: 'bold'}}>The World Object Store</Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '35ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Button variant="contained" onClick={routeChange} style={{height: '75%'}}>Search</Button>
          <TextField 
            id="outlined-basic" 
            label="Place, contract, or wallet address" 
            variant="outlined" 
            onChange={e => setSearchParam(e.target.value)}
            style={{height: '75%'}}
            InputLabelProps={{
              style: { color: '#fff'},
            }}
            sx={{

              width: { sm: 250, md: 350 },
              // border: "solid white 1px",
              // "& .MuiFilledInput-input": { color: "white" }
              input: {color: "white"}
              
            }}/>
        </Box>
      </div>
    </div>;
}