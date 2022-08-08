import React from 'react'
import discordLogo from "../../assets/discord_main_logo.svg";
import {Link} from "react-router-dom"
import hangoutImg from "../../../assets/hanging_out_easy_landing.svg"


const Bar3Hangout = () =>
{
    return (
        <div className="bg-gray-200 h-[600px]">
            <div className="">
                <div className="flex flex-col-reverse justify-center items-center md:flex md:flex-row">
                    <div className="bg-gray-200 ">
                        <h2 className="text-5xl font-bold mb-10 ml-10 text-left mt-20">Where hanging out is easy</h2>
                        <p className="ml-10 text-left ">Grab a seat in a voice channel when you're free. Friends in your server
                       can see you're around and instantly pop in to talk without having to call.</p>
                     </div>  
                    <img src={hangoutImg} className="md:w-1/2 mt-20" />

                </div>
            </div>
        </div>

    );
}

export default Bar3Hangout;