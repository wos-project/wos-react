import React from 'react';
import GoogleMapReact from 'google-map-react';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import Tooltip from '@mui/material/Tooltip';
import { faker } from '@faker-js/faker';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Link, Typography, Box, Grid, InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useState, useRef }  from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TopBar from '../components/TopBar';

const columns = [
  {
    field: 'image',
    headerName: '',
    renderCell: (params) => (
      <Box
        component="img"
        sx={{
          height: 100,
          width: 100,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        src="https://source.unsplash.com/random?auto=format&w=350&dpr=2"
      />
    ),
  },
  {
    field: 'nft',
    headerName: 'NFT',
    width: 80,
    renderCell: (params) => (
      <Link
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 6 }}
        href="/"
      >
        {params.row.name}
      </Link>
    ),
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 100,
    editable: false,
  },
  {
    field: 'distance',
    headerName: 'Distance',
    width: 100,
    editable: false,
  },
  {
    field: 'reward',
    headerName: 'Reward',
    width: 100,
    editable: false,
  },
  {
    field: 'review',
    headerName: 'Review',
    renderCell: (params) => (
      <Link
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 6 }}
        href="/"
      >
        review
      </Link>
    ),
  },
  {
    field: 'explore',
    headerName: 'Explore',
    renderCell: (params) => (
      <Link
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 6 }}
        href="/map"
      >
        explore
      </Link>
    ),
  },];

const rows = [
  { id: 1, contract: '0xCfd3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'Jon', status: 'live', date: 'Jan 3, 2022', distance: "0.5mi", reward: "2", loc: '41.3 : -71.5', world: 'earth' },
  { id: 2, contract: '0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'Cersei', status: 'pending sale', date: 'Jan 5, 2022', distance: "2mi", reward: "2", loc: '41.3 : -71.5', world: 'earth' },
  { id: 3, contract: '0x9ad3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'Jaime', status: 'private', date: 'Jan 6, 2022', distance: "2mi", reward: "5", loc: '41.3 : -71.5', world: 'earth' },
  { id: 4, contract: '0xAdd3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'Arya', status: 'very popular', date: 'Jan 6, 2022', distance: "3mi", reward: "3", loc: '41.3 : -71.5', world: 'earth' },
];

export default function Bounties() {
  const [world, setWorld] = useState("Earth")

  const AnyReactComponent = ({ text }) => <div>
    <Tooltip title="arc1">
      <PersonPinCircleIcon/>
    </Tooltip>
    </div>;
  
  return <div>
    <TopBar/>
    <Grid container direction="row" justifyContent="flex-start" alignItems="left" rowGap={2}>
      <Grid item xs={0.2} marginTop={20}>
      </Grid>
      <Grid item xs={11} md={11} >
        <Grid container direction="column" justifyContent="flex-start" alignItems="left" rowGap={2}>
          <Grid item rowGap={2} mt={2}>
            <Typography gutterBottom variant="h5" component="h2">Bounties</Typography>
          </Grid>
          <Grid item md={6} width='50%'>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="world-label">World</InputLabel>
              <Select label="World" labelId="world-label" value={world} fullWidth={true} onChange={e => setWorld(e.target.value)}>
                <MenuItem value={"Earth"}>Earth</MenuItem>
                <MenuItem value={"Decentraland"}>Decentraland</MenuItem>
                <MenuItem value={"Membit"}>Membit</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12} >
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>;
}
