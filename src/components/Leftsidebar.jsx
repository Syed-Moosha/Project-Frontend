import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import SnoozeIcon from '@mui/icons-material/Snooze';


const Leftsidebar = () => {
    return (
       
        <div style={{backgroundColor:"#F9F9F9",minHeight:"100vh"}}>  
            <div style={{height:"4.5vw",marginLeft:"1vw",width:"12vw",display:"flex",alignItems:"center",borderRadius:"20px",backgroundColor:"#BEE0FF"}}>
                <CreateIcon style={{color:"black",width:"1.5vw",marginLeft:"2vw"}}/>
                <h4 style={{marginLeft:"2vw",fontWeight:"400",fontSize:"1vw"}}>CreateMail</h4>
            </div>
            <div style={{marginTop:"1vw",marginLeft:"0.8vw",width:"12vw",display:"flex",alignItems:"center"}}>
                <InboxIcon style={{color:"black",width:"1.5vw",marginLeft:"2vw"}}/>
                <span style={{marginLeft:"2vw",fontWeight:"400",fontSize:"1.3vw"}}>Inbox</span>
            </div>
            <div style={{marginTop:"1vw",marginLeft:"0.8vw",width:"12vw",display:"flex",alignItems:"center"}}>
                <SendIcon style={{color:"black",width:"1.5vw",marginLeft:"2vw"}}/>
                <span style={{marginLeft:"2vw",fontWeight:"400",fontSize:"1.3vw"}}>Send</span>
            </div>
            <div style={{marginTop:"1vw",marginLeft:"0.8vw",width:"12vw",display:"flex",alignItems:"center"}}>
                <GradeOutlinedIcon style={{color:"black",width:"1.5vw",marginLeft:"2vw"}}/>
                <span style={{marginLeft:"2vw",fontWeight:"400",fontSize:"1.3vw"}}>Important</span>
            </div>
            <div style={{marginTop:"1vw",marginLeft:"0.8vw",width:"12vw",display:"flex",alignItems:"center"}}>
                <SnoozeIcon style={{color:"black",width:"1.5vw",marginLeft:"2vw"}}/>
                <span style={{marginLeft:"2vw",fontWeight:"400",fontSize:"1.3vw"}}>Snoozed</span>
            </div>
        </div> 
    );
};

export default Leftsidebar;