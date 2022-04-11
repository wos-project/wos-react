import * as React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openComingSoon, setOpenComingSoon] = React.useState(false);

  const handleOpenComingSoon = () => {
    setOpenComingSoon(true);
  };

  const handleCloseComingSoon = () => {
    setOpenComingSoon(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleOpenComingSoon()
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
        <MenuItem onClick={handleClose}>Connect Wallet</MenuItem>
        <MenuItem onClick={handleClose}>My NFTs</MenuItem>
        <MenuItem onClick={handleClose}>Create Tracker</MenuItem>
        <MenuItem onClick={handleClose}>View Stats</MenuItem>
        <MenuItem onClick={handleNavDeveloper}>Developers</MenuItem>
        <MenuItem onClick={handleNavDocumentation}>Documentation</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
      </Menu>

      <Dialog
        open={openComingSoon}
        onClose={handleCloseComingSoon}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Coming Soon!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This feature is in development and coming soon.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseComingSoon}>Okay</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}