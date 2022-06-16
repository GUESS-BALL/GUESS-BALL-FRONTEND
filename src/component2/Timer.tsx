import { useEffect, useState } from "react";
import { setTimeout } from "timers/promises";

function Timer(){

    const [time,setTime] = useState(5);
    const [data,setData] = useState(<p></p>);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime((time)=>time-1);
        },1000);
        return () => clearInterval(interval);
    },[]);

    useEffect(()=>{
        if(time<0){
            console.log("YES");
            setData(<p></p>);
        }
        else{
            setData(<h2 style={{color:'tomato'}}>Seconds Left To Select : {time}</h2>);
        }
    },[time]);

    return (
        <div>{data}</div>
        // <p>{time}</p>
    )

}

export default Timer;