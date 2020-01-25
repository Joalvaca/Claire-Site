import React from "react";
import './Form.css';
import Products from "../Products/Products";

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            filterResult:[],
            flow: '0-1',
            preFilter:'yes',
            bacteria: 'yes',
            source: 'yes',
            allProducts:[{product_id:1,product_gpm:"9-16",product_filter:true,product_source:"well",product_test:true,product_name:"Platinum",product_description:"12gpm",price:"400"},
            {product_id:2,product_gpm:"5-8",product_filter:true,product_source:"well",product_test:true,product_name:"Silver",product_description:"12gpm",price:"300"},
            ,{product_id:3,product_gpm:"2-4",product_filter:true,product_source:"well",product_test:true,product_name:"Clairify RO",product_description:"12gpm",price:"400"},
            {product_id:4,product_gpm:"0-1",product_filter:true,product_source:"well",product_test:true,product_name:"Clairify 1",product_description:"12gpm",price:"400"}]
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterByGpm = this.filterByGpm.bind(this);
        this.filterByFilter = this.filterByFilter.bind(this);
        this.filterBySource = this.filterBySource.bind(this);
        this.filterByBacteria = this.filterByBacteria.bind(this)
    }    
        // componentDidMount() {
        //     fetch("http://localhost:8000/api/products")
        //         .then(response => response.json())
        //         .then( products=> {
        //             console.log(products)
        //            this.setState({ allProducts: products})               
        //         })
        // }

     

    handleSubmit(event) {
        alert('Your product is  ' + this.state.flow);
        event.preventDefault();
    }

    handleChange(event) {
        const { name,value} = event.target
        this.setState({
            [name]:value
        });
        if (name == "flow"){
            this.filterByGpm(value)
        }
        if (name == "preFilter"){
           this.filterByFilter(value)
        } 

        if (name == "source"){
            this.filterBySource(value)
         } 
         if (name == "bacteria"){
            this.filterByBacteria(value)
         } 
    }

    filterByGpm (gpm) {
        this.setState((state) =>{
            return {...state,filterResult:state.allProducts.filter((product) => {
                return product.product_gpm == gpm
            } )}
        }    
        )
    }

    filterByFilter(filter){
        this.setState((state) =>{
            return {...state,filterResult:state.allProducts.filter((product) => {
                return product.product_filter == true
            })}
        }
        ) 
    }

    filterBySource(source){
        this.setState((state) =>{
            return {...state,filterResult:state.allProducts.filter((product) => {
                return product.product_filter == source
            })}
        }
        ) 
    }

    filterByBacteria(bacteria){
        this.setState((state) =>{
            return {...state,filterResult:state.allProducts.filter((product) => {
                return product.product_filter == true
            })}
        }
        ) 
    }

    render() {
        return (
            <div className='form'>
                <h1>Form</h1>
                <div>
                </div>
                <div className='form-section'>
                    <section className='user-form'>
                        <form className='user-form' onSubmit={this.handleSubmit}>
                            <h1>Hello</h1>
                            <p>What is your household flow in gpms (gallons per minute)</p>
                            <label>
                                <select 
                                    onChange={this.handleChange} 
                                    value={this.state.flow}
                                    name="flow"
                                    >
                                        <option value='0-1'>0-1</option>
                                        <option value='2-4'>2-4</option>
                                        <option value='5-8'>5-8</option>
                                        <option value='9-16'>9-16</option>
                                </select>
                             </label>   
                            <p>Do you have a Pre-filter</p>
                            <label>
                                <select 
                                    onChange={this.handleChange} 
                                    value={this.state.preFilter}
                                    name="preFilter">
                                        <option value='Yes'>Yes</option>
                                        <option value='No'>No</option
                                    >
                                </select>
                            </label>
                            <p>Is your Source of water city or well?</p>
                            <label>
                                <select 
                                    onChange={this.handleChange} 
                                    value={this.state.source}
                                    name="source"
                                    >
                                        <option value='City'>City</option>
                                        <option value='Well'>Well</option>
                                </select>
                            </label>
                            <p>Have you had your water tested for bacteria</p>
                            <label>
                                <select 
                                    onChange={this.handleChange} 
                                    value={this.state.bacteria}
                                    name="bacteria"
                                    >
                                        <option value='yes'>Yes</option>
                                        <option value='no'>No</option>
                                </select>
                            </label>
                            <p>Statement</p>
                            <input type="submit" value="Submit"/>
                        </form>
                    </section>
                    <section className='user-result'>
                        <div>
                            <h1>Results</h1>
                            <p></p>
                            <div className="unit">
                                <div className='unit-section'>
                                    </div>
                                        {this.state.filterResult.map((item) =>{
                                             return (   
                                                <div className='product-text'>
                                                     <h1>{item.product_name}</h1>
                                                        <p>{item.image}</p>
                                                         <p>{item.product_description}</p>
                                                         <p>{item.price}</p>
                                                         <p>{item.product_filter}</p>
                                                </div>
                                                          )
                                                    })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Form;