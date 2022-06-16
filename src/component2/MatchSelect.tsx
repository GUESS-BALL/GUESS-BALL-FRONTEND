import { useEffect, useState } from "react";
import Axios from 'axios';
import MatchLeaderboard from "./MatchLeaderboard";
import "./App1.css";
import { Navigate, useNavigate } from "react-router-dom";
import NavbarDB from "../components/NavbarDB";

function MatchSelect(){

    const [data,setData] = useState([""]);
    const [leaderboard,setLeaderboard] = useState(<div></div>);
    let server_url = localStorage.getItem('server');
    const [check,setCheck] = useState("INDIA VS PAKISTAN");

    const navigate = useNavigate();

    useEffect(() => {
        Axios.get(`${server_url}/getAllMatches`).then(res=>{setData(res.data)});
    }, []);

    const options = data.map((data1,index)=>{
        return(
            <option value={data1} >{data1}</option>
        );
    })

    return(
        <div className="matchleaderboard">
            <NavbarDB/>

        <div className="centered">
            <div>
                <h1 style={{color:'white'}}><u>Match-Wise Leaderboard</u></h1>
                <form>
                    <select onChange={(event)=>{console.log(setLeaderboard(<MatchLeaderboard match={event.target.value}/>) )}} style={{padding:10,backgroundColor:'whiteSmoke',border:'2px solid black',fontSize:25,margin:50}}>
                        {options}
                    </select>
                </form>
                {leaderboard}
                {/* {check} */}
            </div>
            <div>
                <button style={{marginTop:75,padding:20,fontSize:20,border:'2px solid black',borderRadius:'10px'}} onClick={()=>{navigate('/userdashboard')}}> {"< "} HomePage </button>
            </div>
            </div>
        </div>
    );
}

export default MatchSelect;