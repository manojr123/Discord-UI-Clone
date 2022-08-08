import React from 'react'
import discordLogo from "../../assets/discord_main_logo.svg";
import {Link} from "react-router-dom"
import centerLandingImg from "../../../assets/center_bg_landing_header.svg"
import leftLandingImg from "../../../assets/left_bg_landing_header.svg"
import RightLandingImg from "../../../assets/right_bg_landing_header.svg"


const Bar1Imagine = () =>
{
    return (
      <div>
        <div className = "bg-[#404eed] h-[90vh] relative overflow-hidden z-20">

            <div className="">
                <img src={centerLandingImg} className="w-[150%] absolute bottom-0 -z-10"/>
                <img src={leftLandingImg} className="w-1/3 absolute bottom-0 -left-16 -z-10"/>
                <img src={RightLandingImg} className="w-2/5 absolute bottom-0 -right-16 -z-10"/>
            </div>

            <div className="flex-col justify-center text-center text-white p-16 w-3/5 mx-auto ">
                <h1 className="text-4xl uppercase font-bold mb-8 md:text-6xl">Imagine a place...</h1>
                <p>...where you can belong to a school club, a gaming group or a worldwide art community. 
                   Where just you and handful of friends can spend time together. A place which makes it 
                   easy to talk everyday and hangout more often </p>
                
            </div>
            <div className="flex-col justify-center text-center  md:flex-row md:justify-">
                    <button className="py-4 px-28 text-black-500 bg-white capitalize rounded-full mr-4 space-y-4 md:justify-between hover:shadow-md  hover: text-blue-500 hover:shadow-black md:">Download for Windows</button>
                    <button className="py-4 px-24 bg-gray-900	text-white capitalize rounded-full mr-4 mt-6">
                        Open discord in your browser
                    </button>
                </div>
        </div>       
        </div> 
    )
}

export default Bar1Imagine;