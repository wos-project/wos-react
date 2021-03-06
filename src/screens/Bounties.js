import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, Typography, Box, Grid, InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useState }  from 'react';
import Select from '@mui/material/Select';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";
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
        src={"https://source.unsplash.com/random?auto=format&w=350&dpr=2&r=" + Math.random()}
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
    field: 'status',
    headerName: 'Status',
    width: 140,
    editable: false,
  },
  {
    field: 'world',
    headerName: 'World',
    width: 100,
    editable: false,
  },
  {
    field: 'edit',
    headerName: 'Review',
    renderCell: (params) => (
      <Link
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 6 }}
        href={"/bounty?a=edit&i=" + params.id}
      >
        edit
      </Link>
    ),
  },
  {
    field: 'delete',
    headerName: 'Delete',
    renderCell: (params) => (
      <Link
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 6 }}
        onClick={(e) => alert("sure you want to delete?")}
      >
        delete
      </Link>
    ),
  },];

const rows = [
  { id: 1, contract: '0xCfd3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'Jon', status: 'live', date: 'Jan 3, 2022', world: 'earth' },
  { id: 2, contract: '0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'Cersei', status: 'live', date: 'Jan 5, 2022', world: 'earth' },
  { id: 3, contract: '0x9ad3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'Jaime', status: 'on-hold', date: 'Jan 6, 2022', world: 'earth' },
  { id: 4, contract: '0xAdd3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'Arya', status: 'on-hold', date: 'Jan 6, 2022', world: 'earth' },
];

export default function Bounties() {
  const [world, setWorld] = useState("Earth")
  let navigate = useNavigate();
  
  return <div>
    <TopBar/>
    <Grid container direction="row" justifyContent="flex-start" alignItems="left" rowGap={2}>
      <Grid item xs={0.2} marginTop={20}>
      </Grid>
      <Grid item xs={11} md={11} >
        <Grid container direction="column" justifyContent="flex-start" alignItems="left" rowGap={2}>
          <Grid item rowGap={2} mt={2}>
            <Grid container direction="row">
              <Grid item rowGap={2} alignItems="center" padding={1}>
                <Typography gutterBottom variant="h5" component="h2">Bounties</Typography>
              </Grid>
              <Grid item alignItems="center" padding={1} onClick={() => { navigate("/bounty?a=add") }}>
                <AddCircleIcon></AddCircleIcon>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} width='50%'>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="world-label">World</InputLabel>
              <Select label="World" labelId="world-label" value={world} fullWidth={true} onChange={e => setWorld(e.target.value)}>
                <MenuItem value={"Earth"}>Earth</MenuItem>
                <MenuItem value={"Questori"}>Questori</MenuItem>
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
