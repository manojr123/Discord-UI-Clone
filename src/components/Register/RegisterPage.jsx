import React, {useRef, useContext} from 'react'
import {Link} from "react-router-dom"
import loginBg from "../../../assets/login_bg.svg"
import {DiscordAppContext} from '../../helpers/Contexts';
import { useNavigate } from "react-router-dom";


/**
 * @RegisterPage Component :
 *  Validations :
 *  1. Username should be aplhanumeric only. Username should not already exist
 *  2. Password should have 1 uppercase, 1 lowercase, 1 digit and min 6 characters
 */

const RegisterPage = () =>
{
    const usernameInput = useRef(null)
    const passwordInput = useRef(null)
    const navigate = useNavigate();

   const { username, setUsername, password,setPassword,  
            usersList, setUsersList} = useContext(DiscordAppContext);

const loginScreen = () => {
    window.location.href = '/login';

}


    const validateRegistration = () => {

        console.log('Register : Fn(validateRegistration) : Entered');
        console.log('Register : Fn(validateRegistration) : username',usernameInput.current.value );

       console.log('Register : Fn(validateRegistration) : password',passwordInput.current.value );

        if (validateRegisterUsername() )
        {
            if ( validateRegisterPassword() ){
                navigate("/login");


            } 
            
        } 
    }

    const validateRegisterUsername = () => {

        console.log('Register : Fn(validateRegisterUsername) : Entered');


        let valid = false;
        let username = usernameInput.current.value;
        let password = passwordInput.current.value;

        const alphanumeric = /^[\p{sc=Latn}\p{Nd}]*$/u;

        console.log('Register : Fn(isValidUserName) : Entered');

        if ( alphanumeric.test(username)) {
            valid=true;
        } else {
            valid=false;
            alert('User Name Invalid ! Only Alphanumeric allowed... !')
        }    

        //If Existing username then disallow registration
        usersList.forEach((user)=> {
            if ( user.username === username) {
                console.log('Register : sValidUserName : Duplicate ')
                valid=false;
                alert('User Name already exists ! Pls try another username... ')
            }
        })

        console.log('Register : Fn(isValidUserName) : valid',valid);

        return valid;
    }

const validateRegisterPassword = () => {
    
    let username = usernameInput.current.value;
    let password = passwordInput.current.value;
    let valid=false;

    const strongPassword = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/;

        console.log('Register : Fn(validateRegisterPassword) : Entered');

        if ( strongPassword.test(password)) {
            valid=true;
        } else {
            valid=false;
            alert('Password weak - Include one lowercase letter, one uppercase letter, one digit and total 6 characters !')

        }    

        console.log('Register : Fn(validateRegisterPassword) : valid',valid);
        if (valid) {
            if (usersList !== null ) {
                const newUser = {'username': username,'password' : password};
                setUsersList( [...usersList , newUser ] );
            } else {
                setUsersList( [ newUser ] );
            }
        }

        return valid;
    }



    return (
     <div className="flex justify-center items-center">
        <img className="h-screen w-screen relative z-10" src={loginBg} />
        <div className="w-[450px] h-96 bg-[#23272a] flex flex-col absolute z-20" >

            <div className="mt-4 self-center text-2xl text-white" > Create an account </div> <br/>
            <label className="ml-6 text-white"> USERNAME </label>
            <input ref={usernameInput} className="ml-6 w-5/6 bg-[#4f545c] text-white" type="text" /><br/>
            <label className="ml-6 text-white"> PASSWORD </label>
            <input ref={passwordInput} className="ml-6 w-5/6 bg-[#4f545c] text-white" type="password" /><br/>
            <button className="bg-[#5865f2] w-5/6 ml-6" onClick={validateRegistration}> Continue </button> <br/>
            <Link to="/login"><p className="ml-6 text-blue-400 cursor-pointer" > Already have an account ? </p> </Link>
        </div>
      </div>


    )

}

export default RegisterPage




/*
            <input ref={emailRef} className="ml-6 w-5/6 bg-[#4f545c]" type="text" /> <br/>
            <label className="ml-6 text-white"> USERNAME </label>

*/