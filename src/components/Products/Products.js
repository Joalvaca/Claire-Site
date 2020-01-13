import React from 'react';
import './products.css';
import Platinum from './plat.png';







function Products(){
    return(

        <div className='products'>
            <h1>Products</h1>
                <div className="water-units">
                    <div className="unit">
                        <div>
                            image
                        </div>
                            <div>
                            <h1>Unit</h1>                      
                            <img className='image' src={Platinum} alt='platinum'/>
                            <p>Description</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="unit">
                        <h1>Unit</h1>
                        <p>Image</p>
                        <p>Description</p>
                        <p>Price</p>
                    </div>
                    <div className="unit">
                        <h1>Unit</h1>
                        <p>Image</p>
                        <p>Description</p>
                        <p>Price</p>
                    </div>
                    <div className="unit">
                        <h1>Unit</h1>
                        <p>Image</p>
                        <p>Description</p>
                        <p>Price</p>
                    </div>
                </div>    
        </div>
    );
}

export default Products;