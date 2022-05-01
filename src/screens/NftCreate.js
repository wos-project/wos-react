import React from 'react';
import { faker } from '@faker-js/faker';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Link, Typography, Box, Grid, TextField, Button, Checkbox, InputLabel } from '@mui/material';
import { useForm } from "react-hook-form";
import { useState, useRef }  from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { useNavigate, useSearchParams } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FileUpload from 'react-material-file-upload';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

import { useReactMediaRecorder } from "react-media-recorder";

export default function NftCreate() {
  const [searchParams, setSearchParams] = useSearchParams();
  const videoEl = useRef(null);
  const [files, setFiles] = useState([]);
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  let navigate = useNavigate();
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ video: true });
  const [world, setWorld] = useState("Earth")

  return <div>
    <TopBar/>
    <Grid container direction="row" justifyContent="flex-start" alignItems="left" rowGap={2}>
      <Grid item xs={0.2} marginTop={20}>
      </Grid>
      <Grid item xs={11.8} md={7} >
        <Grid container direction="column" justifyContent="flex-start" alignItems="left" rowGap={2}>
          <Grid item mt={2}>
            <Typography gutterBottom variant="h5" component="h2">{searchParams.get("a") == "edit" ? "Update " : "Create "} NFT</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <FileUpload value={files} onChange={setFiles} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="outlined" onClick={() => {videoEl.current.hidden=false; startRecording();}}>Snap Photo</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={() => {videoEl.current.hidden=false; startRecording();}}>Record Audio</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={() => {videoEl.current.hidden=false; startRecording();}}>Record Video</Button>
              </Grid>
              <Grid item>
                <video src={mediaBlobUrl} controls autoPlay loop hidden={true} ref={videoEl}/>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={5} md={5}>
            <TextField
              variant="outlined"
              label="Title"
              fullWidth
            ></TextField>
          </Grid>

          <Grid item xs={12} md={12} >
            <TextField
              variant="outlined"
              label="Description"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} md={12} >
            <TextField
              variant="outlined"
              label="Tags"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} md={12} >
            <TextField
              variant="outlined"
              label="Price"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item>
            <Checkbox variant="outlined"></Checkbox>Add Tracker
          </Grid>
          <Grid item>
            <Checkbox variant="outlined"></Checkbox>Pin to Location
          </Grid>
          <Grid>
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
          <Grid item>
            <Button variant="outlined" onClick={() => {navigate("/tracker")}}>Save</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Footer></Footer>
  </div>;
}
