import React from "react";
import  './header.css';


function Header(){
    return(
        
        <div className='header'>
            <h1>HEADER</h1>
                <div className='logo'>
                    logo
                 </div>
                 <ul className='nav'>
                     <li>Intro</li>
                     <li>Products</li>
                     <li>Form</li>
                     <li>Contact</li>
                 </ul>

        </div>
        
        
        
    );
}

export default Header; 