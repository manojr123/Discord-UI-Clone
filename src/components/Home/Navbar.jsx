import React, {useState} from 'react'
import discordLogo from "../../assets/discord_main_logo.svg";
import {Link} from "react-router-dom"



const Navbar = () =>
{
    const [showMenu, setShowMenu] = useState(false);

    const showMenuFn = () => {
        setShowMenu( (show) => !show );
        console.log('Navbar: Fn(showMenuFn) entered : showMenu',showMenu)
    };

    return (
    <div className="bg-[#404eed] relative">
        <div className = "w-4/5 mx-auto py-4 flex justify-between items-center bg-transparent ">
            <img src={discordLogo} alt="discord" />
            <div className="hidden text-white font-medium md:flex">
                <span className="m-4">Download</span>
                <span className="m-4">Nitro</span>
                <span className="m-4">Safety</span>
                <span className="m-4">Support</span>
                <span className="m-4">Blog</span>
                <span className="m-4">Careers</span>
            </div>
            <div>
                <Link to={"./login"}><button className="bg-white py-2 px-4 rounded-3xl mr-4">Login</button> </Link>
                
                <span className="md:hidden text-white cursor : pointer" 
                        onClick={showMenuFn}> <i class="fa-solid fa-bars"></i>
                    {console.log('ShowMenu :', showMenu)}
                    {showMenu ? 
                            <div className=" bg-white text-black text-2xl w-2/3 rounded-xl text-left font-medium md:hidden absolute mr-2 z-40">
                                <div className="m-4">Download</div>
                                <div className="m-4">Nitro</div>
                                <div className="m-4">Safety</div>
                                <div className="m-4">support</div>
                                <div className="m-4">Blog</div>
                                <div className="m-4">Careers</div>
                            </div>

                            :null
                    }
                </span>
            </div>
        </div>

    </div>
    )

}
export default Navbar;