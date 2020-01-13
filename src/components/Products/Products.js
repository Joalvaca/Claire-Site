import React from 'react';
import './products.css';







function Products(){
    return(

        <div className='products'>
            <h1>Products</h1>
                <div className="water-units">
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