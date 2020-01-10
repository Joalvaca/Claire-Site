import React from 'react';
import Unit from './Unit.js'


function Products(){
    return(

        <div>
            <h1 className='products'>Products</h1>
                <div className='products'>
                    <Unit/>
                    <Unit/>
                    <Unit/>
                    <Unit/>
                </div>     
        </div>
    );
}

export default Products; 