import { Grid } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import Leftsidebar from '../components/Leftsidebar';
import Middle from '../components/Middle';
import Rightsidebar from '../components/Rightsidebar';
import Footer from '../components/Footer';

const Mainpage = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                <Navbar />
                </Grid>
                <Grid item xs={2}>
             <Leftsidebar />
                </Grid>
                
                <Grid item xs={9}>
                    <Middle />
                </Grid>
                <Grid item xs={1}> <Rightsidebar /> </Grid>
            </Grid>
            <Grid><Footer /></Grid>
        </div>
    );
};

export default Mainpage;