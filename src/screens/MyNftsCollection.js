import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { DataGrid } from '@mui/x-data-grid';
import { Link, Typography, Box, Grid } from '@mui/material';

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
    field: 'date',
    headerName: 'Date',
    width: 100,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 100,
    editable: true,
  },
  {
    field: 'contract',
    headerName: 'Contract',
    width: 150,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 110,
    editable: false,
  },
  {
    field: 'tracker',
    headerName: 'Tracker',
    width: 80,
    renderCell: (params) => (
      <Link
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 6 }}
        href="/tracker"
      >
        yes
      </Link>
    ),
  },
  {
    field: 'loc',
    headerName: 'Location',
    width: 150,
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
        href="/nftcreate?a=edit"
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
        href="/map/location:41.495762,-71.304584"
      >
        explore
      </Link>
    ),
  },];

const rows = [
  { id: 1, contract: '0xCfd3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'Jon', status: 'live', date: 'Jan 3, 2022', tracker: 'yes', loc: '41.3 : -71.5', world: 'earth' },
  { id: 2, contract: '0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'Cersei', status: 'pending sale', date: 'Jan 5, 2022', tracker: 'yes', loc: '41.3 : -71.5', world: 'earth' },
  { id: 3, contract: '0x9ad3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'Jaime', status: 'private', date: 'Jan 6, 2022', tracker: 'yes', loc: '41.3 : -71.5', world: 'earth' },
  { id: 4, contract: '0xAdd3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'Arya', status: 'very popular', date: 'Jan 6, 2022', tracker: 'yes', loc: '41.3 : -71.5', world: 'earth' },
];

export default function MyNftsCollection() {
  return <div>
    <TopBar/>
    <Grid container direction="row" justifyContent="flex-start" alignItems="left" rowGap={2}>
      <Grid item xs={0.2} marginTop={20}>
      </Grid>
      <Grid item xs={11} md={11} >
        <Grid container direction="column" justifyContent="flex-start" alignItems="left" rowGap={2}>
          <Grid container direction="row" justifyContent="flex-start" alignItems="left" rowGap={2} mt={2}>
            <Typography gutterBottom variant="h5" component="h2">My NFTs</Typography>
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
    <Footer></Footer>
  </div>;
}
