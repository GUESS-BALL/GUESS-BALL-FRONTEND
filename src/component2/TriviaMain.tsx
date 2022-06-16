import { useEffect, useState } from "react";
import Axios from 'axios';
import Trivia from "./Trivia";

function TriviaMain(){

    let server_url = localStorage.getItem('server');
    const [data,setData] = useState(<div>
            <h1 style={{color:'white'}}>Welcome To Trivia Game</h1>
            <button type="button" className="normbutton">LOADING</button>
        </div>);

    let status = false;

    function getData(){
        Axios.get(`${server_url}/getTriviaStatus`).then(res=>{
            console.log(res);
            if(res.data){
                if(!status){
                    status = true;
                    setData(<Trivia/>);
                }
            }
            else{
                localStorage.setItem('answergiven',"false");
                status = false;
                setData(<h1 style={{color:'white'}}>ADS Are Yet To Show UP</h1>);
            }
        });
    }

    useEffect(() => {
        const interval = setInterval(getData,2000);
        return () => clearInterval(interval);
    }, []);

    return(
    <div style={{padding:30}}>
        <br/>
        {data}
    </div>);
}

export default TriviaMain;