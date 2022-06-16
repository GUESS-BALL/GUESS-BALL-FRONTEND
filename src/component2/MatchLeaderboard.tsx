import { useEffect, useState } from "react";
import Axios from 'axios';
import { isNullishCoalesce } from "typescript";
import "./App1.css";

type item = {
    match : string
}

function MatchLeaderboard({match}:item){

    const [data,setData] = useState([{"id":0,"matchname":"","email":"","questionsattempted":null,"correctanswers":null,"accuracy":null,"pointsgained":null}]);
    let server_url = localStorage.getItem('server');

    useEffect(() => {
        Axios.get(`${server_url}/findByMatch/${match}`).then(res=>{setData(res.data)});
    },[match]);

    const tableContent = data.map((data1,index)=>{
        return(
            <tr>
                <td className="matchselectstyle">{data1.email}</td>
                <td className="matchselectstyle">{data1.questionsattempted}</td>
                <td className="matchselectstyle">{data1.correctanswers}</td>
                <td className="matchselectstyle">{data1.pointsgained}</td>
                <td className="matchselectstyle">{data1.accuracy} %</td>
            </tr>
        )
    });

    return(
        <table className="matchhead" style={{border:"2px solid black",borderCollapse:'collapse'}}>
            <tr>
                <th className="matchselectstyle">Email</th>
                <th className="matchselectstyle">Questions Attempted</th>
                <th className="matchselectstyle">Correct Answers</th>
                <th className="matchselectstyle">Points Gained</th>
                <th className="matchselectstyle">Accuracy</th>
            </tr>
            {tableContent}
        </table>
    )
}

export default MatchLeaderboard;