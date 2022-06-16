import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TimerIcon from '@mui/icons-material/Timer';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import StarIcon from '@mui/icons-material/Star';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Rules() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{color:'blue',borderColor:'white',backgroundColor:'white'}} variant="outlined" onClick={handleClickOpen}>
        Rules and Regulations
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className='dialogue'
      >
        <DialogTitle><strong>{"Rules and Regulations for Guess-Ball"}</strong></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p><strong  style={{color:"green"}}>&nbsp;+20</strong> Points Will Be awarded for each correct answer</p>
            <p><strong style={{color: "red"}}>&nbsp;-5</strong> Points Will Be detucted for each incorrect answer</p>
            <p><strong style={{color: "blue"}}>&nbsp;+0</strong> No points will be rewarded if not answered</p>
            <p><strong>{<TimerIcon/>}</strong> The player has to submit their response within a given time</p>
            <p><strong>{<CancelOutlinedIcon/>}</strong> Once the time is over, the response will be disabled</p>
            <p><strong className='rules-point' style={{color: "rgb(255 255 17)"}}>{<StarIcon/>}</strong>Wicket will have the highest precedency</p>
            <p><strong className='rules-point' style={{color: "rgb(255 255 17)"}}>{<StarIcon/>}</strong>On Illegal deliveries, runs scored at that ball will be considered </p>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
