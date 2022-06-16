import { type } from "@testing-library/user-event/dist/type";
import './App1.css'

type item = {
    username : string ,
    score : number
}

function Leaderboardbar({username,score}:item){

    return(
        <tr>
            <td style={{border:"5px solid blue"}}>{username}</td>
            <td style={{border:"5px solid blue"}}>{score}</td>
        </tr>
    )
}

export default Leaderboardbar;