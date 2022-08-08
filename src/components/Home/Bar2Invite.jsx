import React from 'react'
import discordLogo from "../../assets/discord_main_logo.svg";
import {Link} from "react-router-dom"
import inviteLandingImg from "../../../assets/invite_only_landing.svg"


const Bar2Invite = () =>
{
    return (

        <div className="bg-white h-[600px]">
            <div className="flex flex-col justify-center items-center md:flex md:flex-row  md:items-center md:justify-center ">
                <img src={inviteLandingImg} className="mt-12 h-full md:w-1/2" />
                <div className="mt-12 bg-white">
                    <h2 className="text-3xl font-bold mb-4 h-full md:w-96 mx-auto md:text-5xl text-left ml-10">Create an invite-only place where you belong</h2>
                    <p className=" mx-auto text-left ml-10  mb-22 md:w-96">Discord servers are organised into topic-based channels where you can collaborate, 
                       share and just talk about your day without clogging up a group chat</p>
                </div>
            </div>
        </div>
    )
}

export default Bar2Invite;