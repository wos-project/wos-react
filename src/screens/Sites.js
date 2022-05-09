import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, Typography, Grid } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from "react-router-dom";
import TopBar from '../components/TopBar';

const columns = [
  {
    field: 'name',
    headerName: 'Name/Domain',
    width: 140,
    editable: false,
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
    width: 120,
    editable: false,
  },
  {
    field: 'hits',
    headerName: 'Hits',
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
        href={"/site?a=edit&i=" + params.id}
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
  { id: 1, contract: '0xCfd3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'decrypt.co', status: 'enabled', date: 'Jan 3, 2022', hits: '356' },
  { id: 2, contract: '0xBdd3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'stackoverflow.com', status: 'enabled', date: 'Jan 5, 2022', hits: '8934' },
  { id: 3, contract: '0x9ad3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'decentraland', status: 'disabled', date: 'Jan 6, 2022', hits: '13m' },
  { id: 4, contract: '0xAdd3D3e5b291E6Fe950503c666b0CCe32Abf8804', name: 'alchemy.co', status: 'enabled', date: 'Jan 6, 2022', hits: '12358' },
];

export default function Sites() {
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
                <Typography gutterBottom variant="h5" component="h2">Sites</Typography>
              </Grid>
              <Grid item alignItems="center" padding={1} onClick={() => { navigate("/site?a=add") }}>
                <AddCircleIcon></AddCircleIcon>
              </Grid>
            </Grid>
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
