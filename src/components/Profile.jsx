import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, IconButton } from '@mui/material';
import { auth, googleProvider } from '../firebase/firebase';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';




const style = {
  position: 'absolute',
  top: '34%',
  left: '79%',
  transform: 'translate(-50%, -50%)',
  width: "30vw",
  height:"20vw",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:"4vw",
  padding:"2vw",
};

export default function Profile() {

const navigate=useNavigate()

    const logout=async ()=>{
        try {
            await signOut(auth,googleProvider)
            auth.currentUser==null && navigate("/")
        } catch (error) {
            
        }
    }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Avatar onClick={handleOpen} sx={{marginLeft:"4vw",width:"3vw",height:"3vw",cursor:"pointer"}} src={auth.currentUser?.photoURL} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{textAlign:"center",fontSize:"1.2vw"}}>
            {auth.currentUser?.email}
          </Typography>
          <Avatar src={auth.currentUser?.photoURL} style={{marginLeft:"11.6vw",width:"6vw",height:"6vw"}}/>
          <Typography  sx={{ textAlign:"center",fontSize:"1.7vw" }}>
            {auth.currentUser?.displayName }
          </Typography>
          <IconButton onClick={logout} style={{fontSize:"1vw",backgroundColor:"#1976d2",color:"black",borderRadius:"2vw",marginTop:"2vw",width:"14vw",height:"4vw",marginLeft:"7.6vw"}}><LogoutIcon />Sign Out</IconButton>
        </Box>
      </Modal>
    </div>
  );
}
