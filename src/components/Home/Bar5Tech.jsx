import React from 'react'
import discordLogo from "../../assets/discord_main_logo.svg";
import {Link} from "react-router-dom"
import justChilingLandingImg from "../../assets/just_chiling_landing.svg"

const Bar5Tech = () =>
{
    return (
        <div>
        <div className="bg-[#f6f6f6] h-[600px]">
            <div className="flex flex-col justify-center items-center md: flex-row">
                <div >
                    <h2 className="text-5xl font-bold mb-4 text-left ml-10 ">RELIABLE TECH FOR STAYING CLOSE</h2>
                    <h2 className="text-5xl font-bold mb-4 ml-10"></h2>
                    <p className="ml-10">Low-latency voice and video feels like you're in the same room. Wave hello over 
                       video, watch friends stream their games, or gather up and have a drawing session
                       with screen share. </p>
                </div>
                <img src={justChilingLandingImg} className="w-3/5 mr-24" />

            </div>
        </div>

        </div>
    );

}

export default Bar5Tech;

//                <div className="w-1/4">
