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

export default function AboutUs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [nft, setNft] = useState("Jon");

  return <div>
    <TopBar/>
    <Grid container direction="row" alignItems="center" rowGap={2}>
      <Grid item xs={0.2} marginTop={20}>
      </Grid>
      <Grid item xs={11.8} md={12}>
        <Grid container direction="column" alignItems="center" rowGap={2}>
          <Grid item mt={10}>
            <Typography gutterBottom variant="h4" component="h2">About Us</Typography>
          </Grid>
          <Grid item mt={2} alignItems="center">
            <Typography gutterBottom variant="h5" component="h2" align="center">
              SP8L<br></br>
              Pin, Track, Find World Objects<br></br>
              Copyright © Questori LLC 2022<br></br>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>;
}
