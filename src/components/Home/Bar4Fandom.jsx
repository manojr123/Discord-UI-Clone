import React from 'react'
import discordLogo from "../../assets/discord_main_logo.svg";
import {Link} from "react-router-dom"
import landingImg from "../../../assets/invite_only_landing.svg"
import fandomLandingImg from "../../assets/fandom_landing.svg"

const Bar4Fandom = () =>
{
    return (
        <div className="bg-white h-[600px]">
            <div className="flex flex-col justify-center items-center md:flex-row mt-24">
                <img src={fandomLandingImg} className="mt-20 w-1/2" />
                <div className="mt-10">
                    <h2 className="text-5xl font-bold mb-4 text-left ml-10">From few to a fandom</h2>
                    <p className="text-left ml-10">Get any community running with moderation tools and custom member
                       access. Give members special powers, set up private channels, 
                       and more. </p>
                </div>
            </div>
        </div>

    )
}

export default Bar4Fandom;