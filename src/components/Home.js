import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect }  from 'react';

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contract, setContract] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    fetch("https://worldos.earth/v1/contract/0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804")
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setContract(data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    // Mock the contract data here so we can test
    // Need to hack the cover image URL since is empty
    setContract({"uid":"EXvou1_dRF-ZOs7jeGRCwAfCFu1X7oRGC5rlG9IkVZwACdFvAOf9Sdi7QeeN8nut6g","walletAddr":"0xff4d7946CabE6662EEBc12d74db83194ca72d18d","walletKind":"ropsten.ethereum","ipfsCid":"QmVsYMVuK4oWyvzsFK4Wna6RHM8EbLS2NNmFU3Baf7NoWr","name":"Chinese Tea Room at the Marble House pin","description":"","coverImageUri":"","contractAddr":"0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804"})
  }, [])

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    if (searchParam) {
      let path = '/results/' + searchParam; 
      navigate(path);
    }
  }

  return <div>
      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '35ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Button variant="contained" onClick={routeChange}>Search</Button>
          <TextField id="outlined-basic" label="Place, contract, or wallet address" variant="outlined" onChange={e => setSearchParam(e.target.value)}/>
        </Box>
      </div>
    </div>;
}