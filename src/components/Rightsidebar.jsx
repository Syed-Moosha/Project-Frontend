import React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { IconButton } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ContactsIcon from '@mui/icons-material/Contacts';

const Rightsidebar = () => {
    return (
        <div style={{backgroundColor:"#F9F9F9",minHeight:"100vw",position:"fixed",right:"0",width:"5vw"}}>
            <IconButton style={{width:"1vw",padding:"2vw"}}><CalendarTodayIcon /></IconButton>
            <br />
            <IconButton style={{width:"1vw",padding:"2vw"}}><AddTaskIcon /></IconButton>
            <br />
            <IconButton style={{width:"1vw",padding:"2vw"}}><ContactsIcon /></IconButton>
            
        </div>
    );
};

export default Rightsidebar;