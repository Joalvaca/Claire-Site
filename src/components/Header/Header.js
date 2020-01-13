import React from "react";
import  './header.css';


function Header(){
    return(

            <nav>
                <div className='nav'>
                     <div className='logo'>Logo</div>
                        <div className='nav-main'>
                            <div className='nav-links'> <a href='#'>Intro</a></div>
                            <div className='nav-links'> <a href='#'>Products</a></div>
                            <div className='nav-links'> <a href='#'>Form</a></div>
                            <div className='nav-links'> <a href='#'>Contact</a></div>
                        </div>
                </div>
            </nav>
       






        
        // <div className='header'>
        //     <h1>HEADER</h1>
        //         <div className='logo'>
        //             logo
        //          </div>
        //          <ul className='nav'>
        //              <li>Intro</li>
        //              <li>Products</li>
        //              <li>Form</li>
        //              <li>Contact</li>
        //          </ul>

        // </div>
        
        
        
    );
}

export default Header; 