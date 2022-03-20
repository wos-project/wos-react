import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Home() {
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