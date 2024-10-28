import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { auth } from '../firebase/firebase';
import Profile from './Profile';



const Navbar = () => {
    return (
        <Grid container >
        <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position="static" sx={{minHeight:"5vw",minWidth:"100vw",paddingTop:"7px",paddingRight:"8px"}}>
          <div style={{display:"flex",}}>
            <Grid item xs={2}>
          <div style={{display:"flex",alignItems:"center"}}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: "2vw",ml:"1vw" }}>
              <MenuIcon style={{width:"2vw"}}/>
            </IconButton>
            <img style={{width:"2vw"}} src={"https://cdn-icons-png.flaticon.com/512/6711/6711567.png"} />
            <Typography sx={{marginLeft:"1vw",fontSize:"1vw"}} variant="h6" color="inherit" component="div">
              Email-Tool
            </Typography>
          </div>
            </Grid>
            <Grid item xs={9}>
                <div style={{
    display: "flex",
    alignItems: "center",
    borderRadius: "40px",
    backgroundColor: "#E4EFFA",
    padding: "0 1vw",
    width: "60vw"
}}>
    <SearchIcon style={{ marginRight: "0.5vw",color:'black' }} />
    <input
        placeholder="Search"
        style={{
            height: "3vw",
            width: "100%",
            backgroundColor: "transparent",
            border: "none",
            outline: "none"
        }}
    />
</div>

            </Grid>
            <Grid item xs={1}>
                <Profile />
            </Grid>


          
          </div>
        </AppBar>
      </Box>
      </Grid>
    );
};

export default Navbar;