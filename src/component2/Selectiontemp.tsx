import { useEffect, useState } from "react";
import "./App1.css";
import Axios from 'axios';
import Leaderboard from "./CurrentGameLeaderboard";
import batsmen from "../sachinbg1.png";
import bowler from "../bowllbg1.png";
import batsmengif from "../batsmencropped2.gif";
import bowlergif from "../bowlergif.gif";
import correctans from "../correctans5.gif";
import wrongans from "../wrongans3.gif";

function Selectiontemp(){

    const [classname,setClassname] = useState("buttonstyle disabled");
    const [bottomData,setBottomData] = useState(<p></p>);
    const [waitForBall,setWaitForBall] = useState(<h1></h1>);
    const [score,setScore] = useState(-2);
    // const [lastBallTime,setLastBallTime] = useState("12");
    const [rsotb,setRsotb] = useState(-1);
    const [answer,setAnswer] = useState(<p></p>);
    const [head,setHead] = useState(<h1></h1>);
    const [buttonStatus,setButtonStatus] = useState(false);

    const [btn,setBtn] = useState("btn");

    let server_url = localStorage.getItem('server');

    let lastBallTime = "12";
    let BallUpdatedFlag = false;
    let score_ = -2;

    function getData(){
        Axios.get(`${server_url}/getStatus`).then(res=> {
            if(res.data==="buttonstyle"){
                setButtonStatus(false);
                setHead(<div>
                            <h1 style={{color:'white'}}>Click The Next Ball Outcome</h1>
                            <h2 className="user-msg">You will not be allowed to select, once the bowler start his run up</h2>
                        </div>);
                setWaitForBall(<h1></h1>);
                setAnswer(<h1></h1>);
                BallUpdatedFlag = false;
            }
            else{
                setButtonStatus(true);
                setHead(<h1></h1>);
                Axios.get(`${server_url}/isBallUpdated/${lastBallTime}`).then(res=>{
                console.log(res.data);
                if(res.data!==-1){
                    setBottomData(<p></p>)
                    Axios.get(`${server_url}/getLastBallTime`).then(resu=>{lastBallTime=resu.data});
                    setRsotb(res.data);
                    let str = JSON.stringify(localStorage.getItem("scored"));
                    console.log(str);
                    str = str.substring(1,str.length-1);
                    if(str.length===0 || str==="Nothing"){
                        setWaitForBall(<h1 style={{color:"blue"}}>No Option Selected</h1>);
                    }
                    else{
                        if(res.data===parseInt(str)){
                            setWaitForBall(
                            <div>
                                <img src={correctans} height={200} width={275} style={{margin:'0px'}}/>
                                {/* <h2 style={{color:"lightblue"}}>Correct Answer</h2> */}
                            </div>
                            );
                            Axios.post(`${server_url}/increment/${localStorage.getItem('username')}`);
                        }
                        else{
                            setWaitForBall(
                            <div>
                                <img src={wrongans} height={200} width={275} style={{marginBottom:'0px'}}/>
                                {/* <h1 style={{color:"red"}}>Wrong Answer</h1> */}
                            </div>
                            );
                            Axios.post(`${server_url}/decrement/${localStorage.getItem('username')}`);
                        }
                    }
                    setAnswer(<h1 style={{color:'white',marginBottom:'-100px'}}>Outcome Of This Ball Is {res.data===7 ? "Wicket" : res.data} , You Selected {str==="7" ? "Wicket" : str}</h1>);
                    BallUpdatedFlag = true;
                    localStorage.setItem("scored","Nothing");
                    localStorage.setItem("optionSelected","false");
                } else if(!BallUpdatedFlag){
                    setWaitForBall(<h1 style={{color:'white'}}>Waiting For Ball To Complete</h1>);
                }
            });
                
            }
            setClassname(res.data);
            console.log(classname);
        })
    }

    useEffect(() => {
        Axios.get(`${server_url}/getLastBallTime`).then(resu=>{lastBallTime=resu.data});
        const interval = setInterval(getData,2000);
        return () => clearInterval(interval);
      }, []);


    //   function getBall(){
    //         Axios.get(`http://localhost:8080/isBallUpdated/${lastBallTime}`).then(res=>{
    //             console.log(res.data);
    //             if(res.data!==-1){
    //                 Axios.get('http://localhost:8080/getLastBallTime').then(resu=>setLastBallTime(resu.data));
    //                 setRsotb(res.data);
    //                 setAnswer(<h1>Outcome Of This Ball Is {res.data} --- You Selected {score}</h1>);
    //                 // setWaitForBall(<h1>Outcome Of This Ball Is {res.data} --- You Selected {score}</h1>);
    //             }
    //         });
    //   }

    //   useEffect(() => {
    //     const interval = setInterval(getBall, 3000);
    //     return () => clearInterval(interval);
    //   }, []);

    //   setInterval(getBall,3000);

    //   useEffect(()=>{
    //       if(classname==="buttonstyle"){
    //           setWaitForBall(<h1></h1>);
    //       }
    //       else{
    //           setWaitForBall(<h1>Waiting For Ball To Complete</h1>);
    //       }
    //   })

    function change_(e:string){
        setBottomData(<h2 style={{color:'white'}}>The Selected Number is {e}</h2>);
    }

    return(
        <div>
            {head}
            <br></br>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
                <div>
                    <img src={batsmengif} height={375} width={275}></img>
                </div>
                <div >
                    <button type="button" id="btn" onClick={()=>{localStorage.setItem("scored","6");localStorage.setItem("optionSelected","true");change_("6");}} className={classname} disabled={buttonStatus}> 6 </button>
                    <button type="button" id="btn" onClick={()=>{localStorage.setItem("scored","5");localStorage.setItem("optionSelected","true");change_("5");}} className={classname} disabled={buttonStatus}> 5 </button>
                    <button type="button" id="btn" onClick={()=>{localStorage.setItem("scored","4");localStorage.setItem("optionSelected","true");change_("4");}} className={classname} disabled={buttonStatus}> 4 </button>
                    <button type="button" id="btn" onClick={()=>{localStorage.setItem("scored","3");localStorage.setItem("optionSelected","true");change_("3");}} className={classname} disabled={buttonStatus}> 3 </button>
                    <button type="button" id="btn" onClick={()=>{localStorage.setItem("scored","2");localStorage.setItem("optionSelected","true");change_("2");}} className={classname} disabled={buttonStatus}> 2 </button>
                    <button type="button" id="btn" onClick={()=>{localStorage.setItem("scored","1");localStorage.setItem("optionSelected","true");change_("1");}} className={classname} disabled={buttonStatus}> 1 </button>
                    <button type="button" id="btn" onClick={()=>{localStorage.setItem("scored","0");localStorage.setItem("optionSelected","true");change_("0");}} className={classname} disabled={buttonStatus}> 0 </button>
                    <button type="button" id="btn" onClick={()=>{localStorage.setItem("scored","7");localStorage.setItem("optionSelected","true");change_("Wicket");}} className={classname} disabled={buttonStatus}> w </button>
                    <br></br>
                    {bottomData}
                    <br></br>
                    {waitForBall}
                    <br></br>
                    {answer}
                    <br></br>
                </div>
                <div>
                    <img src={bowlergif} height={405} width={325}></img>
                </div>
            </div>
        </div>
    )

}

export default Selectiontemp;