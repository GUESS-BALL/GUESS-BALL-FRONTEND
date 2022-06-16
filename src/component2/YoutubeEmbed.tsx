import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player/youtube";
import Rules from "./rules";

function YoutubeEmbed(){

    const [sound,setSound] = useState(true);
    const [button,setButton] = useState(<button type="button" onClick={()=>{setButton(changetomute());}} style={{color:'green',margin:20,padding:10}}>UN-MUTE</button>);
         
        // onClick={()=>{setSound(true);}}>MUTE</button>)}} >UN-MUTE VIDEO</button>);

    function changetomute(){
        console.log("changetomute called");
        setSound(false);
        return(
            <button type="button" onClick={()=>{setButton(changetounmute());}} style={{color:'green',margin:20,padding:10}}>MUTE VIDEO</button>
        )
    }

    function changetounmute(){
        console.log("changetounmute called");
        setSound(true);
        return(
            <button type="button" onClick={()=>{setButton(changetomute());}} style={{color:'green',margin:20,padding:10}}>UN-MUTE VIDEO</button>
        )
    }



    return(
        <div>
            <div className="video-responsive" style={{paddingTop:40}}>
                <ReactPlayer width={1280} height={720} style={{ pointerEvents: 'none'}} playing={true} muted={sound} url='https://www.youtube.com/watch?v=AFEZzf9_EHk' ></ReactPlayer>
                {/* <iframe
                width="853"
                height="1000"
                src={`https://www.youtube.com/embed/KE18M9TufSU`}
                frameBorder="0"
                allow='autoplay; encrypted-media'
                allowFullScreen
                title="Embedded youtube"
                /> */}
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                <div>
                    {button}
                </div>
                <Rules/>
            </div>
    </div>
    );
}

export default YoutubeEmbed;