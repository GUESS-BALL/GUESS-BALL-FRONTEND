import { useEffect, useState } from 'react';
import logo from '../fruits.jpg';
import ground from '../ground.jpg';
import './App1.css';
import Axios from 'axios';
import ballwait from '../ballwait1whiteblur.png';
import Extra_Cover from "../Extra_Cover.jpg";
import Long_On from "../Long_On.jpg";
import Long_Off from "../Long_Off.jpg";
import Deep_Mid_Wicket from "../Deep_Mid_Wicket.jpg";
import Deep_Backward_Square_Leg from "../Deep_Backward_Square_Leg.jpg";
import Fine_Leg from "../Fine_Leg.jpg";
import third_Man from "../3rd_Man.jpg";
import Backward_point from "../Backward_point.jpg";
import Loading from "../Loadingwhiteblur.png";
import Lottie2 from "../Lottie2.gif";
import correctans from "../correctans5.gif";
import wrongans from "../wrongans3.gif";

function ImageselectionUser(){

    let server_url = localStorage.getItem('server');
    const [classname,setClassname] = useState("buttonstyle");
    const [bottomData,setBottomData] = useState(<p></p>);
    const [waitForBall,setWaitForBall] = useState(<h1></h1>);
    const [score,setScore] = useState(-2);
    // const [lastBallTime,setLastBallTime] = useState("12");
    const [answer,setAnswer] = useState(<p></p>);
    const [head,setHead] = useState(<h1></h1>);

    const [fruitName,setFruitName] = useState(<p></p>);
    const [selected,setSelection] = useState(<p></p>);

    const [photo,setPhoto] = useState(<img src={Lottie2}/>);
    const [imageMap,setImageMap] = useState("#image-map");

    let lastBallTime = "12";
    let BallUpdatedFlag = false;
    let ImageStatus = false;

    function getData(){
        Axios.get(`${server_url}/getStatus`).then(res=> {
            if(res.data==="buttonstyle"){
                if(!ImageStatus){
                    setImageMap("#image-map");
                    setPhoto(<img src={ground} useMap={"#image-map"}/>);
                    ImageStatus = true;
                }
                BallUpdatedFlag = false;
                setHead(<div>
                            <h1 style={{color:'white'}}>Click The Next Ball Outcome</h1>
                            <h2 className='user-msg'>You will not be allowed to select, once the bowler start his run up</h2>
                        </div>);
                setWaitForBall(<h1></h1>);
                setAnswer(<h1></h1>);
            }
            else{
                setImageMap("");
                setHead(<h1></h1>);
                Axios.get(`${server_url}/isSectionUpdated/${lastBallTime}`).then(res=>{
                console.log(res.data);
                let strrr : string =  res.data;
                if(strrr.length!==0){
                    setBottomData(<p></p>);
                    Axios.get(`${server_url}/getLastBallTime`).then(resu=>{lastBallTime=resu.data});
                    let str = JSON.stringify(localStorage.getItem('sectionUser'));
                    console.log(str);
                    str = str.substring(1,str.length-1);
                    setPhoto(<></>);
                    if(str.length===0 || str==="Nothing"){
                        setWaitForBall(<h1 style={{color:"blue"}}>No Option Selected</h1>);
                    }
                    else{
                        if(res.data===str){
                            // setWaitForBall(<h1 style={{color:"green"}}>Correct Answer</h1>);
                            setWaitForBall(<img src={correctans}/>)
                            Axios.post(`${server_url}/increment/${localStorage.getItem('username')}`);
                        }
                        else{
                            // setWaitForBall(<h1 style={{color:"red"}}>Wrong Answer</h1>);
                            setWaitForBall(<img src={wrongans}/>)
                            Axios.post(`${server_url}/decrement/${localStorage.getItem('username')}`);
                        }
                    }
                    setAnswer(<h1 style={{color:'white'}}>Ball Went At {res.data} , You Selected {str}</h1>);
                    BallUpdatedFlag = true;
                    localStorage.setItem('sectionUser',"Nothing");
                    setSelection(<p></p>);
                    localStorage.setItem("optionSelected","false");
                } else if(!BallUpdatedFlag){
                    setFruitName(<p></p>)
                    // setWaitForBall(<h1>Waiting For Ball To Complete</h1>);
                    if(ImageStatus){
                        setPhoto(<img src={ballwait} />);
                        ImageStatus = false;
                    }
                    // setSelection(<h2>Waiting For Ball To Complete</h2>);
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

    // function change(e:string){
    //     setFruitName(e);
    // }

    const handleOnClick = (e : any) => {
        e.preventDefault();
        // setSelection(<p>You Selected {e}</p>);
    }

    function change(e:string){
        setFruitName(<h2 style={{color:'white'}}>This Region Is : {e}</h2>);
    }

    function changeselect(e:string){
        localStorage.setItem('sectionUser',e);
        setSelection(<h1 style={{color:'white'}}>You Selected : {e}</h1>);
        localStorage.setItem("optionSelected","true");
    }

    return(
        <div>
            {head}
            <br></br>
            {/* <img src={photo} useMap={imageMap} /> */}
            {photo}

            <map name="image-map">
                <area id="a1" target="" onMouseOver={(event)=>{change("Deep Extra Cover"); setPhoto(<img src={Extra_Cover} useMap={imageMap}/>)}} onClick={(event)=>{handleOnClick(event);changeselect("Deep Extra Cover");}} 
                    alt="Deep Extra Cover" title="Deep Extra Cover" href="" coords="216,151,170,241,183,361,513,254,405,215" shape="poly" />

                <area id="a1" target="" onMouseOver={(event)=>{change("Long Off"); setPhoto(<img src={Long_Off} useMap={imageMap}/>)}} onClick={(event)=>{handleOnClick(event);changeselect("Long Off");}} 
                    alt="Long Off" title="Long Off" href="" coords="198,375,267,437,379,505,514,275" shape="poly" />

                <area id="a1" target="" onMouseOver={(event)=>{change("Long On"); setPhoto(<img src={Long_On} useMap={imageMap}/>)}} onClick={(event)=>{handleOnClick(event);changeselect("Long On")}} 
                    alt="Long On" title="Long On" href="" coords="407,521,525,560,672,584,547,280" shape="poly" />

                <area target="" onMouseOver={(event)=>{change("Deep MId WIcket"); setPhoto(<img src={Deep_Mid_Wicket} useMap={imageMap}/>)}} onClick={(event)=>{handleOnClick(event);changeselect("Deep Mid Wicket")}} 
                    alt="Deep MId WIcket" title="Deep MId WIcket" href="" coords="721,585,841,533,910,413,574,275" shape="poly" />

                <area target="" onMouseOver={(event)=>{change("Deep Backward Square Leg"); setPhoto(<img src={Deep_Backward_Square_Leg} useMap={imageMap}/>)}} onClick={(event)=>{handleOnClick(event);changeselect("Deep Backward Square Leg")}} 
                    alt="Deep Backward Square Leg" title="Deep Backward Square Leg" href="" coords="929,374,925,274,854,170,584,257" shape="poly" />
                
                <area target="" onMouseOver={(event)=>{change("FIne Leg"); setPhoto(<img src={Fine_Leg} useMap={imageMap}/>)}} onClick={(event)=>{handleOnClick(event);changeselect("Fine Leg")}} 
                    alt="FIne Leg" title="FIne Leg" href="" coords="651,78,717,101,820,152,569,239" shape="poly" />

                <area target="" onMouseOver={(event)=>{change("3rd Man"); setPhoto(<img src={third_Man} useMap={imageMap}/>)}} onClick={(event)=>{handleOnClick(event);changeselect("3rd Man")}} 
                    alt="3rd Man" title="3rd Man" href="" coords="447,43,541,60,628,75,540,227" shape="poly" />

                <area target="" onMouseOver={(event)=>{change("Backward Point"); setPhoto(<img src={Backward_point} useMap={imageMap}/>)}} onClick={(event)=>{handleOnClick(event);changeselect("Backward Point")}} 
                    alt="Backward Point" title="Backward Point" href="" coords="239,133,318,81,431,46,519,243,468,224" shape="poly" />
            </map>

            <br></br>
            {fruitName}
            <br></br>
            {selected}

            <br></br>
            {bottomData}

            <br></br>
            {waitForBall}

            <br></br>
            {answer}

            <br></br>

        </div>
    )
    
}

export default ImageselectionUser;