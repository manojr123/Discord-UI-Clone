import React from 'react'
import Navbar from './Navbar'
import Bar1Imagine from './Bar1Imagine'
import Bar2Invite from './Bar2Invite'
import Bar3Hangout from './Bar3Hangout'
import Bar4Fandom from './Bar4Fandom'
import Bar5Tech from './Bar5Tech'
import Footer from './Footer'

/**
 * @HomePage Component :
 *  
 *  
 * 
 */
const HomePage = () =>
{
    return (
        <div>
            <Navbar />
            <Bar1Imagine />
            <Bar2Invite />
            <Bar3Hangout />
            <Bar4Fandom />
            <Bar5Tech />
            <Footer />
        </div>
    );

}

export default HomePage;