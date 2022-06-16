import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function GameCard() {
  const navigate = useNavigate();
  const watchnplay = () => {
    navigate('/watchnplay');
  }

  return (
    <>
    <Card sx={{ maxWidth: 500, maxHeight: 1500 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://e0.365dm.com/19/05/2048x1152/skysports-darren-gough-england_4679764.jpg"
        alt="IND vs ENG"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          <b>IND vs ENG</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <b> Get ready to imagine a world class cricket encounter between India vs England, at Sharjah</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Button  style={{fontSize:20,padding:20,margin:25,marginTop:40,width:"450px",backgroundColor:'orange',borderColor:'black',borderRadius:10,fontFamily:'Vazir'}} onClick={watchnplay}>Watch-N-Play</Button>
       
      </CardActions>
    </Card>
    </>
  );
}