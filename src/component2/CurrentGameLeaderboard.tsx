import { useEffect, useState } from "react";
import Axios from 'axios';
import Leaderboardbar from "./Leaderboardbar";
import './App1.css';
import Loader from "./Loader";

function GameLeaderboard(){
    const [data,setData] = useState([{"id": 0,"username": "","score":0}]);
    const [loader,setLoader] = useState(<></>);

    let server_url = localStorage.getItem('server');

    useEffect(() => {
        setLoader(<Loader/>);
        Axios.get(`${server_url}/Leaderboard`).then(res=>{setData(res.data); setLoader(<></>);});
        
      }, []);

    useEffect(() => {
        const interval = setInterval(() => {
        Axios.get(`${server_url}/Leaderboard`).then(res=>{setData(res.data)});
          console.log('This will run every second!');
        }, 10000);
        return () => clearInterval(interval);
      }, []);

    const arr = data.map((data,index) => {

        if(data.username===localStorage.getItem('username')){
            localStorage.setItem('score',data.score.toString());
            return(
                <tr>
                    <td style={{color:'maroon'}}>{data.username.split('@')[0]}</td>
                    <td className="centertablecontent" style={{color:'maroon'}}>{data.score}</td>
                </tr>
            )
        }

        return (
            // <Leaderboardbar username={data.username} score={data.score} />
            <tr>
                <td>{data.username.split('@')[0]}</td>
                <td className="centertablecontent" >{data.score}</td>
            </tr>
        )
    })

    return(
        <div className="centered ltable" style={{textAlign:'start'}}>
            {loader}
            <h1 style={{color:'white'}}><u>Leaderboard</u></h1>
            <table className="leaderboardhead">
                <tr>
                    <td ><b>Username</b></td>
                    <td ><b>Points</b></td>
                </tr>
                {arr}
            </table>
        </div>
    );
}

export default GameLeaderboard;
