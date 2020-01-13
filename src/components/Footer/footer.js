import React from "react";
import './Footer.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'



function Footer(){
    return(
        
        <div className='footer'>
            <h1>Footer</h1>
        <div className='footer-section'>
            <div className='footer-icons'>Phone</div>
            <div className='footer-icons'>Email</div>
            <div className='footer-icons'><FontAwesomeIcon icon={['fab','linkedin']}/></div>
            <div className='footer-icons'>Copyright</div>
        </div>

        
        </div>
    );
}

export default Footer; 