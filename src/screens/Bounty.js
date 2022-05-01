import React from 'react';
import { faker } from '@faker-js/faker';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Link, Typography, Box, Grid, TextField, Button, Checkbox, InputLabel } from '@mui/material';
import { useForm } from "react-hook-form";
import { useState, useRef }  from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export default function Bounty() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [nft, setNft] = useState("Jon");
  const [trigger, setTrigger] = useState("play");
  const [action, setAction] = useState("pay user");
  let navigate = useNavigate();

  return <div>
    <TopBar/>
    <Grid container direction="row" justifyContent="flex-start" alignItems="left" rowGap={2}>
      <Grid item xs={0.2} marginTop={20}>
      </Grid>
      <Grid item xs={11.8} md={7} >
        <Grid container direction="column" justifyContent="flex-start" alignItems="left" rowGap={2}>
          <Grid item mt={2}>
            <Typography gutterBottom variant="h5" component="h2">{searchParams.get("a") == "add" ? "Add " : "Edit "}Bounty</Typography>
          </Grid>

          <Grid item md={6} width='70%'>
            <Grid container direction="row" alignItems="center">
              <Grid item alignItems="center" padding={1}>
                <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="trigger-nft">NFT</InputLabel>
                  <Select label="NFT" labelId="nft-label" value={nft} fullWidth={true} onChange={e => setNft(e.target.value)}>
                    <MenuItem value={"Jon"}>Jon</MenuItem>
                    <MenuItem value={"Cersei"}>Cersei</MenuItem>
                    <MenuItem value={"Jaime"}>Jaime</MenuItem>
                    <MenuItem value={"Arya"}>Arya</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={6} width='70%'>
            <Grid container direction="row" alignItems="center">
              <Grid item alignItems="center" padding={1}>
                <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="trigger-label">Trigger</InputLabel>
                  <Select label="Trigger" labelId="trigger-label" value={trigger} fullWidth={true} onChange={e => setTrigger(e.target.value)}>
                    <MenuItem value={"view"}>View</MenuItem>
                    <MenuItem value={"play"}>Play</MenuItem>
                    <MenuItem value={"interact"}>Interact</MenuItem>
                    <MenuItem value={"visit"}>Interact</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item alignItems="center" padding={1}>
                <AddCircleIcon></AddCircleIcon>
              </Grid>
              <Grid item alignItems="center" padding={1}>
                <RemoveCircleIcon></RemoveCircleIcon>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={6} width='70%'>
            <Grid container direction="row" alignItems="center">
              <Grid item alignItems="center" padding={1}>
                <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="action-label">Trigger</InputLabel>
                  <Select label="Action" labelId="trigger-label" value={action} fullWidth={true} onChange={e => setAction(e.target.value)}>
                    <MenuItem value={"pay user"}>Pay User</MenuItem>
                    <MenuItem value={"pay site"}>Pay Site</MenuItem>
                    <MenuItem value={"issue coupon"}>Issue Coupon</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item alignItems="center" padding={1}>
                <AddCircleIcon></AddCircleIcon>
              </Grid>
              <Grid item alignItems="center" padding={1}>
                <RemoveCircleIcon></RemoveCircleIcon>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={5} md={5}>
            <TextField
              variant="outlined"
              label="Amount to pay user"
              fullWidth
            ></TextField>
          </Grid>

          <Grid item xs={12} md={12} >
            <TextField
              variant="outlined"
              label="Amount to pay site"
              fullWidth
            ></TextField>
          </Grid>

          <Grid item>
            <Button variant="outlined" onClick={() => {navigate("/")}}>Save</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Footer></Footer>
  </div>;
}
