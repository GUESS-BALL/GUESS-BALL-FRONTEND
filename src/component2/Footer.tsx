import shot from "../shot.png";
import logos from "../sociallogosbg.png";

function Footer(){
    return(
        <div style={{backgroundColor:'lightblue',border:'1px solid black'}}>

            <div style={{margin:'0px',padding:'25px',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                <div>
                    <img src={shot} height={200} width={225} ></img>
                </div>

                <div>
                    <p><b>MY ACCOUNT</b></p>
                    <ul style={{display:'table',margin:'0 auto',textAlign:'left'}}>
                        <li>Log In</li>
                        <li>Sign Up</li>
                        <li>View Profile</li>
                        <li>User Dashboard</li>
                    </ul> 
                </div>

                <div>
                    <p><b>GAMEPLAY</b></p>
                    <ul style={{display:'table',margin:'0 auto',textAlign:'left'}}>
                        <li>User Dashboard</li>
                        <li>Match Leaderboard</li>
                        <li>Player History</li>
                        <li>Watch N Play</li>
                    </ul> 
                </div>

                <div>
                    <h3>Follow Us</h3>
                    <p>For Announcement And Updates</p>
                    {/* <p><b>Subscribe Us</b></p>
                    <input type={'text'} style={{padding:'10px'}} placeholder="Enter Your Email Address"/>
                    <button type="button" style={{margin:'10px',padding:'10px'}}>Submit</button>
                    <p>By Subscribing To This You Accept Our Terms</p> */}
                    <img src={logos} height={53}/>
                </div>
            </div>

            {/* <div style={{marginTop:'40px',paddingBottom:'10px'}}>
                Guess-Ball Copyright © 2022
            </div> */}

        </div>
    )
}

export default Footer;