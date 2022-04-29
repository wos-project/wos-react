import * as React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { useState, useRef }  from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Popover from '@mui/material/Popover';
import DialogComingSoon from '../components/DialogComingSoon';

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dialogEl = useRef(null);

  const [openExplore, setOpenExplore] = React.useState(false);
  const [openCreators, setOpenCreators] = React.useState(false);
  const [openMarketers, setOpenMarketers] = React.useState(false);
  const [openMyNfts, setOpenMyNfts] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleComingSoon = () => {
    setAnchorEl(null);
    collapse();
    dialogEl.current.open();
  };

  const handleReports = () => {
    setAnchorEl(null);
    collapse();
    navigate("/report");
  }

  let navigate = useNavigate();
  const handleNavHome = () => {
    setAnchorEl(null);
    collapse();
    navigate("/");
  }

  const handleNavSearch = (p) => {
    setAnchorEl(null);
    collapse();
    navigate("/search/" + p);
  }

  const handleClickExplore = () => {
    setOpenExplore(!openExplore);
    setOpenCreators(false);
    setOpenMarketers(false);
    setOpenMyNfts(false);
  }

  const handleClickCreators = () => {
    setOpenExplore(false);
    setOpenCreators(!openCreators);
    setOpenMarketers(false);
    setOpenMyNfts(false);
  }

  const handleClickMarketers = () => {
    setOpenExplore(false);
    setOpenCreators(false);
    setOpenMarketers(!openMarketers);
    setOpenMyNfts(false);
  }

  const handleClickMyNfts = () => {
    setOpenExplore(false);
    setOpenCreators(false);
    setOpenMarketers(false);
    setOpenMyNfts(!openMyNfts);    
  }

  const collapse = () => {
    setOpenExplore(false);
    setOpenCreators(false);
    setOpenMarketers(false);
    setOpenMyNfts(false);
  }

  const handleClickDevelopers = () => {
    window.location.href = "https://github.com/wos-project";
  }

  const handleClickDocumentation = () => {
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
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <List
          sx={{
            width: '100%',
            maxWidth: 350,
            boxShadow: 14,
            borderRadius: 2,
            p: 1,
            bgcolor: 'background.paper'
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItem disablePadding>
            <ListItemButton onClick={handleClickExplore}>
              <ListItemText primary="Explore" sx={{color:'black'}}></ListItemText>
              {openExplore ? <ExpandLess color="primary"/> : <ExpandMore color="primary"/>}
            </ListItemButton>
          </ListItem>
          <Collapse in={openExplore} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={ handleNavHome }>
                <ListItemText primary="World Object Store" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ () => navigate("/bounties") }>
                <ListItemText primary="Bounties" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ () => handleNavSearch("spatialaudio") }>
                <ListItemText primary="Spatial Audio" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ () => handleNavSearch("photos") }>
                <ListItemText primary="Photos" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ () => handleNavSearch("video") }>
                <ListItemText primary="Video" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ () => handleNavSearch("3d") }>
                <ListItemText primary="3D" sx={{color:'black'}}/>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClickMyNfts}>
              <ListItemText primary="My NFTs" sx={{color:'black'}}></ListItemText>
              {openMyNfts ? <ExpandLess color="primary"/> : <ExpandMore color="primary"/>}
            </ListItemButton>
          </ListItem>
          <Collapse in={openMyNfts} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={ () => { navigate("/mynfts/collection")} }>
                <ListItemText primary="Collection" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ () => { navigate("/mynfts/trackers") } }>
                <ListItemText primary="Trackers" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ () => { navigate("/mynfts/history") }  }>
                <ListItemText primary="History" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ handleReports }>
                <ListItemText primary="Stats" sx={{color:'black'}}/>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClickCreators}>
              <ListItemText primary="Creators" sx={{color:'black'}}></ListItemText>
              {openCreators ? <ExpandLess color="primary"/> : <ExpandMore color="primary"/>}
            </ListItemButton>
          </ListItem>
          <Collapse in={openCreators} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={ () => { navigate("/creators/create") } }>
                <ListItemText primary="Create NFT" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ () => { navigate("/creators/import") } }>
                <ListItemText primary="Import NFT" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ handleReports }>
                <ListItemText primary="Reports" sx={{color:'black'}}/>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClickMarketers}>
              <ListItemText primary="Marketers" sx={{color:'black'}}></ListItemText>
              {openMarketers ? <ExpandLess color="primary"/> : <ExpandMore color="primary"/>}
            </ListItemButton>
          </ListItem>
          <Collapse in={openMarketers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={ () => { navigate("/marketers/sites") } }>
                <ListItemText primary="Sites" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ () => { navigate("/marketers/bounties") } }>
                <ListItemText primary="Bounties" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ handleComingSoon }>
                <ListItemText primary="Sponsor" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ handleComingSoon }>
                <ListItemText primary="Insertion Order" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ handleReports }>
                <ListItemText primary="Reports" sx={{color:'black'}}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={ handleComingSoon }>
                <ListItemText primary="Analytics" sx={{color:'black'}}/>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClickDevelopers}>
              <ListItemText primary="Developers" sx={{color:'black'}}></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClickDocumentation}>
              <ListItemText primary="Documentation" sx={{color:'black'}}></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleComingSoon}>
              <ListItemText primary="About" sx={{color:'black'}}></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
      <DialogComingSoon ref={dialogEl}></DialogComingSoon>
    </div>
  );
}
