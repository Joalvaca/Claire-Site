import React from "react";
import  './header.css';
import Claire from './images/Claire-logo.png'


function Header(){
    return(

            <nav>
                <div className='nav'>
                     <div className='logo'></div>
                        <div className='nav-main'>
                            <div className='nav-links'> <a href='#'>Intro</a></div>
                            <div className='nav-links'> <a href='#'>Products</a></div>
                            <div className='nav-links'> <a href='#'>Form</a></div>
                            <div className='nav-links'> <a href='#'>Contact</a></div>
                        </div>
                </div>
            </nav>
               
    );
}

export default Header; 