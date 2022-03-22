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
        fetch("https://worldos.earth/api/v1/contract/0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804")
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
            )
      }, [])

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/results/' + searchParam; 
    navigate(path);
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