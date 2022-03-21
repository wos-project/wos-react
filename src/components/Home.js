import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect }  from 'react';

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contract, setContract] = useState(null);

  useEffect(() => {
        fetch("https://worldos.cloud/v1/contract/0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804")
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
          <Button variant="contained">Search</Button>
          <TextField id="outlined-basic" label="Place, contract, wallet address" variant="outlined" />
        </Box>
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/results"}>Search Results</Link>
      </div>
    </div>;
}