import React, {useState, useRef, useContext} from 'react'
import discordLogo from "../../../assets/discord_main_logo.svg";
import qrCode from "../../../assets/qr_code.png"
import {Link} from "react-router-dom"
import loginBg from "../../../assets/login_bg.svg"
import {DiscordAppContext} from '../../helpers/Contexts';
import { useNavigate } from "react-router-dom";

/**
 * @LoginPage Component :
 *  Validations :
 *  1. Username should exist in the list of registered users
 *  2. Password should map to the username as in the list of registered users
 */


const LoginPage = () =>
{
    const usernameInput = useRef(null)
    const passwordInput = useRef(null)
    const navigate = useNavigate();

    const { username, setUsername, password,setPassword,  
            usersList, setUsersList} = useContext(DiscordAppContext);

    const validateLogin = () => {

        console.log('Login : Fn(validateLogin) : entered');
        
        console.log('Login : Fn(validateLogin) : usernameInput',usernameInput.current.value);
        console.log('Login : Fn(validateLogin) : passwordInput',passwordInput.current.value);


        if (validateLoginUsername() )
        {
            if ( validateLoginPassword() ){
                navigate("/dashboard");

            } else {
                alert('Incorrect Password - Pls enter correct password !')
            }
            
        } else {
            alert('Invalid Login name !')
        }
    }

    const validateLoginUsername = () => {
        let validUser = false;

        console.log('Login : Fn(validateLoginUsername) : entered');

        // Check if user exists
        if (usersList !== null)
        {
            usersList.forEach ( (user)=> {
                if (user.username === usernameInput.current.value ) {
                    validUser = true;
                }
            });
        }    

        console.log('Login : Fn(validateLoginUsername) : validUser', validUser)

        return validUser
    }

    const validateLoginPassword = () => {
        let validPassword = false;

        console.log('Login : Fn(validateLoginPassword) : entered');        

        if (usersList !== null)
        {
            usersList.forEach ( (user, index)=> {

                console.log('Login - isValidPassword - user.userName', user.username);
                console.log('Login - isValidPassword - user.userName', user.password);

                if ( (user.username === usernameInput.current.value ) && (user.password === passwordInput.current.value ) ) {
                    validPassword = true;
                }
            });
        }

        console.log('Login : Fn(validateLoginPassword) : validPassword',validPassword );        

        return validPassword;

        
    }


    return (
        <div className="flex justify-center items-center " >
            <img className="h-screen w-screen relative z-10" src={loginBg} />
            <div className="w-[550px] h-96 bg-[#23272a] absolute z-20 rounded-xl">
               <div className="flex flex-row text-white justify-center items-center h-full"> 
                    <div className="flex flex-col w-1/2 mt-6 h-[90%]   ml-4" >
                        <h1 className="text-2xl strong" > Welcome back ! </h1>
                        <p> We're so excited to see you again ! </p> <br/>                  
                        <label > USERNAME </label>
                        <input ref={usernameInput} className="bg-[#4f545c]" type="text" /> <br/>
                        <label > PASSWORD </label>
                        <input ref={passwordInput} className="bg-[#4f545c]" type="password" /><br/>
                        
                        <p className="text-xs text-blue-400">  Forgot your password ? </p><br/>
                        <button className="bg-[#5865f2] cursor-pointer" onClick={validateLogin}> Login </button>  <br/>
                        <p className="text-xs">  Need an account ? <Link to="/register"><span className="text-blue-400 cursor-pointer" > Register </span></Link></p>

                    </div>
                    <div className="flex flex-col w-1/2 ml-4">
                        <img className="w-2/3 self-center " src={qrCode}  /> <br/>
                        <h1 className="text-2xl"> Log in with QR Code </h1> <br/>
                        <p> Scan this with the <span className="font-bold"> Discord mobile </span></p>
                        <p> app to login instantly </p>
                    </div>

               </div> 
            </div>
        </div>
    )

}

export default LoginPage