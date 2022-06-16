import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Templogin(){

    const [inputData,setInputData] = useState("");
    const navigate = useNavigate();

    function setUsername(){
        localStorage.setItem('username',inputData);
        navigate('/Selection')
    }

    return(
        <div>
            <input style={{padding:15}} placeholder="Enter Username" type="text" onChange={(e)=> setInputData(e.target.value)}/>
            <button type="submit" className="buttonstyle" onClick={()=>setUsername()}> Submit </button>
        </div>
    );
    
}

export default Templogin;