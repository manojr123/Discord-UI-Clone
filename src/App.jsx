import React, {useState} from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";
import DashboardPage from "./components/Dashboard/DashboardPage";
import {DiscordAppContext} from './helpers/Contexts';

/**
 * @author Manoj Raghavan
 * @version 0.0.1
 * XX-XX-2022 - Creation
 * 
 * Discord UI Clone :
 *   A clone of the Discord instant messaging social platform 
 *   based on React, JavaScript, Tailwind CSS and HTML
 * 
 * This includes the following features:  
 *    1. Creation of discord Landing page.
 *    2. Login page at URL '/login'
 *    3. Register page at URL '/register'
 *    4. Dashboard page at URL '/dashboard'
 *    5. Login & Registration Authentication functionality
 *    6. The UI is responsive for desktop and mobile phones.
 * 
 */



/**
* The main Component : @App 
* Define all the state variables, useEffect, Contexts, Routes and render the App
* @param {} 
* @return Render the App
*/



function App() {

  const [username, setUsername ] = useState(""); // current active user
  const [password, setPassword ] = useState(""); // current password of active user
  const [usersList, setUsersList] = useState([]); // List of valid users


  return (

    <div>
        <DiscordAppContext.Provider value=
        {{ username, setUsername, password,setPassword,  
            usersList, setUsersList }}
        >

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} >
            </Route>
            <Route path="/login" element={<LoginPage />} >
            </Route>
            <Route path="/register" element={<RegisterPage />} >
            </Route>
            <Route path="/dashboard" element={<DashboardPage />} >
            </Route>
        </Routes>
        </BrowserRouter>  
        
        </DiscordAppContext.Provider>


    </div>

   ) 
}

export default App;
