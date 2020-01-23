import React from 'react';
import './products.css';
import Platinum from './images/plat.png';
import C1 from './images/c1.png';
import Ro from './images/ro.png';
import Silver from './images/silver.png';

function Products() {
    return (

        <div className='products'>
            <p className='product-intro'>Introducing our line up of products</p>
            <div className="water-units">
                <div className="unit">
                    <div className='unit-section' >
                        <img className='platinum' src={Platinum} alt='platinum'/>
                    </div>
                    <div className='product-text'>
                        <h1>Platinum</h1>
                        <p>xxxxxxxxxxxx</p>
                        <p>Price</p>
                    </div>
                </div>
                });
                <div className="unit">
                    <div className='unit-section'>
                        <img className='silver' src={Silver} alt='platinum'/>
                    </div>
                    <div className='product-text'>
                        <h1>Silver</h1>
                        <p>xxxxxxxxxxxx</p>
                        <p>Price</p>
                    </div>
                </div>
                <div className="unit">
                    <div className='unit-section' >
                        <img className='clairify-1' src={C1} alt='platinum'/>
                    </div>
                    <div className='product-text'>
                        <h1>Clairify 1</h1>
                        <p>xxxxxxxxxxxxx</p>
                        <p>Price</p>
                    </div>
                </div>
                <div className="unit">
                    <div className='unit-section'>
                        <img className='clairify-ro' src={Ro} alt='platinum'/>
                    </div>
                    <div className='product-text'>
                        <h1>Clairify RO</h1>
                        <p>xxxxxxxxxxxx</p>
                        <p>Price</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;