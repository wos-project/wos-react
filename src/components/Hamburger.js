import * as React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import DialogComingSoon from './DialogComingSoon';
import { useState, useRef }  from 'react';

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dialogEl = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleComingSoon = () => {
    setAnchorEl(null);
    dialogEl.current.open();
  };

  let navigate = useNavigate();
  const handleNavHome = () => {
    navigate("/");
  }

  const handleNavDeveloper = () => {
    window.location.href = "https://github.com/wos-project";
  }

  const handleNavDocumentation = () => {
    window.location.href = "https://github.com/wos-project/wos-protocol-spec"
  }

  return (
    <div>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleNavHome}>Home</MenuItem>
        <MenuItem onClick={handleComingSoon}>My NFTs</MenuItem>
        <MenuItem onClick={handleComingSoon}>Create Tracker</MenuItem>
        <MenuItem onClick={handleComingSoon}>View Stats</MenuItem>
        <MenuItem onClick={handleNavDeveloper}>Developers</MenuItem>
        <MenuItem onClick={handleNavDocumentation}>Documentation</MenuItem>
        <MenuItem onClick={handleComingSoon}>About</MenuItem>
      </Menu>

      <DialogComingSoon ref={dialogEl}></DialogComingSoon>

    </div>
  );
}