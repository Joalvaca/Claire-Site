import React from "react";
import "./Intro.css"
import Banner from './images/banner.png';
import QD from './images/quantum-disinfection.png'


function Intro(){
    return(
        
        <div className='intro'>
            <img className='media-title' src={QD} alt='platinum'/>
            <p className='intro-text'>Quantum Disinfection™ is a revolutionary technology that uses quantum mechanic principles of electron movement to create catalytic active surfaces. This is the first time such a technology has been used to disinfect water.</p>
           
                <img className='media-image' src={Banner} alt='platinum'/>
            
        </div>
    );
}

export default Intro; 