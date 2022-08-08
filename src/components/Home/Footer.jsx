import React from 'react'
import discordLogo from "../../assets/discord_main_logo.svg";
import {Link} from "react-router-dom"
import Flag from "../../assets/usa_flag.png"
import footerLinks from './FooterLinks'
import twitterImg from "../../assets/twitter_icon.svg"
import instagramImg from "../../assets/instagram_icon.svg"
import facebookImg from "../../assets/facebook_icon.svg";
import youtubeImg from "../../assets/youtube_icon.svg";



const Footer = () =>
{
    return (
                    <div className="bg-[#23272a] pt-20 pb-16">
            <div className="px-6 grid grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-12">
                <div className="mb-14 col-span-4 md:col-span-3 md:row-span-2">
                    <h4 className="text-[#5865f2] uppercase font-extrabold text-2xl">
                        IMAGINE A PLACE
                    </h4>
                    <div className="mt-6 flex items-center cursor-pointer">
                        <img className="h-4 mr-2" src={Flag} alt="flag"/>
                        <p className="text-white">English, USA</p>
                        <svg className="ml-2" width="7" height="5" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h7v5H0z"/><path d="M0 1l3.488 2.737L6.975 1" stroke="#FFF"/></g></svg>
                    </div>
                    <div className="mt-6 flex items-center text-white">
                        <a href="https://twitter.com/discord">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a className="ml-6" href="https://www.instagram.com/discord/">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a className="ml-6" href="https://www.facebook.com/discord/">
                            <i class="fa-brands fa-facebook-f"></i>        
                        </a>
                        <a className="ml-6" href="https://www.youtube.com/discord">
                            <i class="fa-brands fa-square-youtube"></i>                        </a>
                    </div>
                </div>
                <div className="hidden lg:col-span-1 lg:row-span-2 lg:[display:initial]"></div>
                {footerLinks.map((dataItem , index) => 
                    (
                        <div className="mb-10 col-span-2" key={index}>
                            <h5 className="text-[#5865f2] pt-2">{dataItem.title}</h5>
                            {dataItem.data.map((item,currIndex,) => (
                                <a className="mt-2 block text-white hover:underline" href={item.href} key={currIndex}>{item.name}</a>
                            ))}
                        </div>
                    )   
                )}
            </div>
            <div className="px-6">
                <div className="h-[1px] bg-[#5865f2] mb-8"></div>
                <div className="flex items-center justify-between">
                    <a href="https://discord.com/">
                        <img src={discordLogo} alt="discord" />
                    </a>
                    <Link to="/register">
                        <div className="bg-[#5865f2] text-white rounded-3xl px-4 py-2 text-sm hover:bg-[#7289da] hover:shadow-md hover:shadow-black/25 cursor-pointer">
                            Sign up
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        );

}

export default Footer;