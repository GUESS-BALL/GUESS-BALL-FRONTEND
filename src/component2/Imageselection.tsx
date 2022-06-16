import { useState } from 'react';
import logo from '../fruits.jpg';
import ground from '../ground.jpg';
import './App1.css';
import axios, { Axios } from 'axios';

function Imageselection(){

    let server_url = localStorage.getItem('server');

    const [fruitName,setFruitName] = useState("No Section Selected");

    const [selected,setSelection] = useState(<p></p>);
    const [photo, setPhoto]= useState(ground);
    // function change(e:string){
    //     setFruitName(e);
    // }

    var groundSection = "";

    const handleOnClick = (e : any) => {
        e.preventDefault();
        // setSelection(<p>You Selected {e}</p>);
    }

    function change(e:string){
        setFruitName(e);
    }

    function changeselect(e:string){
        groundSection = e;
        setSelection(<h2 style={{color:'white'}}>You Selected : {e}</h2>);
        localStorage.setItem('section',e);
    }

    function submitSection(){
        axios.post(`${server_url}/updateSection/${localStorage.getItem('section')}`);
    }

    return(
        <div>
            {/* <img src={logo} useMap='#image_map' />
            
            <map name="image_map">
            <area alt="orange" onClick={(event)=>{handleOnClick(event);change("Orange")}} title="orange" href="" coords="46,47,34" shape="circle" />
            <area alt="apple" onClick={(event)=>{handleOnClick(event);change("Apple")}} title="apple" href="" coords="142,54,40" shape="circle" />
            <area alt="banana" onClick={(event)=>{handleOnClick(event);change("Banana")}} title="banana" href="" coords="40,141,139,178" shape="rect" /> 
            </map> */}
            <img src={photo} useMap="#image-map" />
            {/* <map name="image_map">
            <area alt="Deep Extra Cover" onClick={(event)=>{handleOnClick(event);change("Deep Extra Cover")}} title="Deep Extra Cover" href="" coords="260,160,93" shape="circle" />
            <area alt="Long Off" onClick={(event)=>{handleOnClick(event);change("Long Off")}} title="Long Off" href="" coords="356,318,90" shape="circle" />
            <area alt="Long On" onClick={(event)=>{handleOnClick(event);change("Long On")}} title="Long On" href="" coords="534,382,98" shape="circle" />
            <area alt="Deep Mid Wicket" onClick={(event)=>{handleOnClick(event);change("Deep Mid Wicket")}} title="Deep Mid Wicket" href="" coords="752,357,114" shape="circle" />
            <area alt="Deep Backward Square Leg" onClick={(event)=>{handleOnClick(event);change("Deep Backward Square Leg")}} title="Deep Backward Square Leg" href="" coords="810,168,84" shape="circle" />
            <area alt="Fine Leg" onClick={(event)=>{handleOnClick(event);change("Fine Leg")}} title="Fine Leg" href="" coords="680,55,65" shape="circle" />
            <area alt="3rd Man" onClick={(event)=>{handleOnClick(event);change("3rd Man")}} title="3rd Man" href="" coords="542,18,69" shape="circle" />
            <area alt="Backward Point" onClick={(event)=>{handleOnClick(event);change("Backward Point")}} title="Backward Point" href="" coords="389,30,79" shape="circle" />
            </map> */}

            <map name="image-map">
                <area id="a1" target="" onMouseOver={(event)=>{change("Deep Extra Cover")}} onClick={(event)=>{handleOnClick(event);changeselect("Deep Extra Cover");}} 
                    alt="Deep Extra Cover" title="Deep Extra Cover" href="" coords="216,151,170,241,183,361,513,254,405,215" shape="poly" />

                <area id="a1" target="" onMouseOver={(event)=>{change("Long Off")}} onClick={(event)=>{handleOnClick(event);changeselect("Long Off")}} 
                    alt="Long Off" title="Long Off" href="" coords="198,375,267,437,379,505,514,275" shape="poly" />

                <area id="a1" target="" onMouseOver={(event)=>{change("Long On")}} onClick={(event)=>{handleOnClick(event);changeselect("Long On")}} 
                    alt="Long On" title="Long On" href="" coords="407,521,525,560,672,584,547,280" shape="poly" />

                <area target="" onMouseOver={(event)=>{change("Deep MId WIcket")}} onClick={(event)=>{handleOnClick(event);changeselect("Deep Mid Wicket")}} 
                    alt="Deep MId WIcket" title="Deep MId WIcket" href="" coords="721,585,841,533,910,413,574,275" shape="poly" />

                <area target="" onMouseOver={(event)=>{change("Deep Backward Square Leg")}} onClick={(event)=>{handleOnClick(event);changeselect("Deep Backward Square Leg")}} 
                    alt="Deep Backward Square Leg" title="Deep Backward Square Leg" href="" coords="929,374,925,274,854,170,584,257" shape="poly" />
                
                <area target="" onMouseOver={(event)=>{change("FIne Leg")}} onClick={(event)=>{handleOnClick(event);changeselect("Fine Leg")}} 
                    alt="FIne Leg" title="FIne Leg" href="" coords="651,78,717,101,820,152,569,239" shape="poly" />

                <area target="" onMouseOver={(event)=>{change("3rd Man")}} onClick={(event)=>{handleOnClick(event);changeselect("3rd Man")}} 
                    alt="3rd Man" title="3rd Man" href="" coords="447,43,541,60,628,75,540,227" shape="poly" />

                <area target="" onMouseOver={(event)=>{change("Backward Point")}} onClick={(event)=>{handleOnClick(event);changeselect("Backward Point")}} 
                    alt="Backward Point" title="Backward Point" href="" coords="239,133,318,81,431,46,519,243,468,224" shape="poly" />
            </map>

            <br></br>
            <h1 style={{color:'white'}}>Region Name : {fruitName}</h1>

            <br></br>
            <h1>{selected}</h1>
            <br></br>
            {/* <button type='submit' style={{fontSize:25,padding:25,backgroundColor:'orange'}} onClick={(event)=>{handleOnClick(event);submitSection();}}>Submit</button> */}

        </div>
    )
    
}

export default Imageselection;