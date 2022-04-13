import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import HamburgerMenu from './Hamburger';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useRef, useState }  from 'react';
import DialogComingSoon from './DialogComingSoon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function TopBar() {  
  const dialogEl = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const openComingSoon = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <AppBar position="static">
    <Toolbar variant="dense">
      <HamburgerMenu></HamburgerMenu>
      {false &&
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      }
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Beta
      </Typography>
      <Button color="inherit" onClick={handleClick}>Connect Wallet</Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openComingSoon}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Metamask</MenuItem>
        <MenuItem onClick={handleClose}>Coinbase</MenuItem>
        <MenuItem onClick={handleClose}>Gemini</MenuItem>
      </Menu>
    </Toolbar>
    <DialogComingSoon ref={dialogEl}></DialogComingSoon>
  </AppBar>;
}
