import { useEffect, useState } from "react";
import { setInterval } from "timers/promises";
import loading from '../bowlergif.gif';

function Test(){

    return(
        <div style={{backgroundColor:'green'}}>
            <img src={loading} alt="Loading"></img>
        </div>
    );
}

export default Test;