import Axios from 'axios';

function Home(){

    let server_url = localStorage.getItem('server');

    function increment(){
        Axios.post(`${server_url}/${localStorage.getItem('username')}`);
    }

    function decrement(){
        Axios.post(`${server_url}/${localStorage.getItem('username')}`);
    }

    return(
        <div>
            <h1>Hello {localStorage.getItem('username')}</h1>
            <button type="button" style={{fontSize:30,margin:20}} onClick={()=>increment()}>Increment</button>
            <button type="button" style={{fontSize:30,margin:20}} onClick={()=>decrement()}>Decrement</button>
        </div>
    );
}

export default Home;