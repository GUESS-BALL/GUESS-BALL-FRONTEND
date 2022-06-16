import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Lottie2 from "../Lottie2.gif";

function Loader(){
    return(
        <Backdrop sx={{ color: 'lightblue',zIndex: (theme) => theme.zIndex.drawer + 1 }} open >
            <img src={Lottie2} />
        </Backdrop>
    )
}

export default Loader;