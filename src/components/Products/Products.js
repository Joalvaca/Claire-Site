import React from 'react';
import './products.css';
import Platinum from './images/plat.png';
import C1 from './images/c1.png';
import Ro from './images/ro.png';
import Silver from './images/silver.png';







function Products(){
    return(

        <div className='products'>
            <p className='product-text'>Introducing our line up of products</p>
                <div className="water-units">
                    <div className="unit">
                        <div>
                            <img className='unit-image' src={Platinum} alt='platinum'/>
                        </div>
                        <div className='platinum'>
                            <h1>Platinum</h1>                      
                            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="unit">
                        <div>
                            <img className='unit-image' src={Silver} alt='platinum'/>
                        </div>
                        <div>
                            <h1>Silver</h1>                      
                            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="unit">
                        <div>
                            <img className='unit-image' src={C1} alt='platinum'/>
                        </div>
                        <div>
                            <h1>Clairify 1</h1>                      
                            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="unit">
                        <div>
                            <img className='unit-image' src={Ro} alt='platinum'/>
                        </div>
                        <div>
                            <h1>Clairify RO</h1>                      
                            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <p>Price</p>
                        </div>
                    </div>
                </div>    
        </div>
    );
}

export default Products;