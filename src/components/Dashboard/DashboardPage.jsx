import React from 'react'
import { BsPlus} from 'react-icons/bs';
import { FiDownload} from 'react-icons/fi';
import {FaCompass, FaDiscord} from 'react-icons/fa';
import ServerIcon from "../ServerIcon";
import BlockUser from "../../assets/blocked_users_icon.svg"

/**
 * @DashboardPage Component :
 *  
 *  
 * 
 */

const DashboardPage = () =>
{
    return (
        <div className="abolute top-0 right-0 left-0 bottom-0 flex flex-col flex-1">
            <h1> Dashboard </h1>
            <div className="relative overflow-hidden w-full h-full flex">
                <div className="top-0 left-0 bottom-0 h-screen w-[72px] m-0 flex flex-col items-center flex-shrink-0 bg-[#202225] text-white shadow-lg">
                    <div className="h-16">
                        <div className="sidebar-icon text-[white] group hover:bg-[#5865F2]">
                            {<FaDiscord size="28"/>}
                            <span class="sidebar-tooltip group-hover:scale-100">
                                Home
                            </span>
                        </div>
                    </div>
                    <div className="h-[2px] bg-[#36393F] w-[32px] my-1"></div>
                    <ServerIcon icon={<BsPlus size="32"/>} text={"Add a Server"}/>
                    <ServerIcon icon={<FaCompass size="20"/>} text={"Explore Public Servers"}/>
                    <div className="h-[2px] bg-[#36393F] w-[32px] my-1"></div>
                    <ServerIcon icon={<FiDownload size="20"/>} text={"Download Apps"}/>
                </div>
                <div className="flex flex-col overflow-hidden min-h-0 w-[240px] flex-auto flex-shrink-0 flex-grow-0 bg-[#2f3136]">
                    <nav className="relative flex flex-1 flex-col bg-[#2f3136] overflow-hidden">
                        <div className="z-10 flex flex-auto flex-shrink-0 flex-grow-0 p-[10px] h-12 items-center shadow-md">
                            <button className="w-full h-7 rounded bg-[#202225] text-left font-medium text-sm px-1 text-[#A3A6AA]">
                                Find or start a conversation
                            </button>
                        </div>
                        <div className="scrollBar overflow-x-hidden overflow-y-scroll">
                            <div className="flex-auto min-h-0 bg-[#2f3136] pr-0">
                                <ul className="relative list-none">
                                    <div className="h-2" aria-hidden="true"></div>
                                    <li className="relative max-w-[224px] ml-2">
                                        <div className="flex items-center text-white bg-[#42464D] p-2 rounded-md">
                                            <svg className="h-6 w-6 mr-4 ml-1" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                                            <div className="text-base">Friends</div>
                                        </div>
                                    </li>
                                    <h2 className="flex items-center justify-between mt-4 ml-4 mr-2 mb-1 text-[#96989d] uppercase text-sm">
                                        <span>Direct message</span>
                                        <svg x="0" y="0" class="privateChannelRecipientsInviteButtonIcon-1ObKXK icon-2xnN2Y" aria-hidden="false" width="16" height="16" viewBox="0 0 18 18"><polygon fill-rule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon></svg>
                                    </h2>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <section className="flex-shrink-0 flex-grow-0 flex-auto">
                        <div className="flex items-center justify-between px-2 h-[52px] text-sm font-medium text-[#96989d] bg-[#292B2F]">
                            <div className="flex justify-center items-center text-white bg-[#3BA55D] p-2 rounded-full h-8 w-8">
                                <FaDiscord size="30"/>
                            </div>
                            <div className="flex flex-col text-white text-sm font-semibold">
                                <h2>keyev35088</h2>
                                <p>#9317</p>
                            </div>
                            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z" fill="currentColor"></path><path d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z" fill="currentColor"></path><path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" fill="currentColor"></path><path d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z" class="strikethrough-2Kl6HF" fill="currentColor"></path></svg>
                            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="currentColor"></path></svg></svg>
                            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path></svg>
                        </div>
                    </section>
                </div>
                <div className="flex flex-col bg-[#36393f] overflow-hidden w-full">
                    <section className="relative flex items-center justify-between min-w-0 w-full flex-shrink-0 flex-grow-0 flex-initial text-base z-10 h-12 px-2 shadow-md">
                        <div className="flex">
                            <svg x="0" y="0" class="h-6 w-6 text-[#96989d] mx-2" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                            <h3 className="text-white text-base font-medium mr-2">Friends</h3>
                            <div className="w-[2px] h-6 mx-2 bg-[#96989d]"></div>
                            <div className="flex">
                                <div className="flex justify-center items-center text-center min-w-[40px] rounded py-[2px] px-2 mx-2 text-white bg-[#454950]">Online</div>
                                <div className="flex justify-center items-center text-center min-w-[40px] rounded py-[2px] px-2 mx-2 text-[#b9bbbe]">All</div>
                                <div className="flex justify-center items-center text-center min-w-[40px] rounded py-[2px] px-2 mx-2 text-[#b9bbbe]">Pending</div>
                                <div className="flex justify-center items-center text-center min-w-[40px] rounded py-[2px] px-2 mx-2 text-[#b9bbbe]">Blocked</div>
                                <div className="flex justify-center items-center text-center min-w-[40px] rounded py-[2px] px-2 mx-2 text-white bg-[#3BA55D]">Add Friend</div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <svg x="0" y="0" class="text-white mx-2" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805 20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z"></path></svg>
                            <div className="w-[2px] h-6 mx-2 bg-[#96989d]"></div>
                            <svg x="0" y="0" class="text-white mx-2" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor"></path></svg>
                            <svg x="0" y="0" class="icon-2xnN2Y mx-2" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"></path></svg>
                        </div>
                    </section>
                    <div className="relative flex flex-row overflow-hidden h-full">
                        <div className="relative flex flex-col flex-auto overflow-hidden max-w-[856px] shadow-sm shadow-[]">
                            <div className="flex flex-col justify-center items-center w-full h-full max-w-[440px] flex-auto flex-nowrap ml-auto mr-auto">
                                <img src={BlockUser} alt="blocked user"/>
                                <div className="text-[#a3a6aa] text-base">No one's around to play with Wumpus.</div>
                            </div>
                        </div>
                        <div className="flex flex-initial [flex-basis:30%] min-w-[360px] max-w-[420px] h-full">
                            <div className="relative flex flex-col flex-auto min-h-0 overflow-hidden p-4 border-l-[1px] border-[rgba(79,84,92,0.48)] h-full ml-[2px]">
                                <h3 className="mt-2 mb-4 font-bold text-2xl text-white">Active Now</h3>
                                <div className="flex flex-col p-4 justify-center items-center text-center">
                                    <h5 className="mb-1 text-base font-medium text-white">It's quiet for now...</h5>
                                    <p className="text-[#b9bbbe] text-sm font-normal">When a friend starts an activity—like playing a game or hanging out on voice—we’ll show it here!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );

}

export default DashboardPage;