import { Grid, Typography } from '@mui/material';
import Navbar from './NavbarDB';
import PortfolioCardDB from './PortfolioCardDB';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Faq from './FAQ';
import Leaderboard from './GeneralLeaderboard';
import "../App.scss";
import Button from '@mui/material/Button';

export default function UserDashboard() {

    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);

    const [role, setRole, removeRole] = useCookies(['role']);
    useEffect(() => {
        if (cookies.jwt == "" || cookies.jwt == null || role.role !== "USER") {
            navigate('/login');
      }},[])  

      const navigate = useNavigate();
  const watchnplay = () => {
    navigate('/watchnplay');
  }
    return (
        <>
            <Navbar />
            <Grid container spacing={5} sx={{ backgroundColor: '#E9E7E7' }}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={7}>
                    <br /><br />
                    <div className='game-banner'>
                        <div className='game-banner-watch'>
                            <h2>INDIA vs PAKISTAN</h2>
                            <p>Get Ready to witness a nail biting encounter between India and Pakistan...</p>
                            <Button  style={{fontSize:20,padding:10,margin:'auto',width:'50%', color:'black',backgroundColor:'#00e8fff0',borderColor:'black',borderRadius:10,fontFamily:'Vazir'}} onClick={watchnplay}>Watch-N-Play</Button>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <Grid container item spacing={-1}>
                        <Faq/>
                    </Grid>
                    <br/><br /><br /><br />
                </Grid>
                <Grid item xs={4}>
                    <Grid container item spacing={-1}>
                        <PortfolioCardDB />
                    </Grid>
                    <br /><br /><br /><br/>
                    
                    <Grid container item spacing={-1}>
                        <Leaderboard/>
                    </Grid>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </Grid>
            </Grid>
        </>
    );
}