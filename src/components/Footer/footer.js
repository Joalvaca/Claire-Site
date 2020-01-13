import React from "react";
import './Footer.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'



function Footer(){
    return(
        
        <div className='footer'>
            <h1>Footer</h1>
        <div className='footer-section'>
            <div className='footer-icons'>(984)-242-0855</div>
            <div className='footer-icons'>info@Claire-technologies.com</div>
            <div className='footer-icons'><FontAwesomeIcon icon={['fab','linkedin']}/></div>
            <div className='footer-icons'>Copyright © 2019 Claire Technologies. All rights reserved.</div>
        </div>

        
        </div>
    );
}

export default Footer; 