import React from "react";
import './Form.css';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            flow: '0-1',
            preFilter:'yes',
            bacteria: 'yes',
            source: 'yes',
            character:{}
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    
        componentDidMount() {
            fetch("https://swapi.co/api/people/1")
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        character:data
                    })
                })
        }

      

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.flow);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        return (
            <div className='form'>
                <h1>Form</h1>
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
                                        <option value='City'>0-1</option>
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
                                    value={this.state.bacteria}
                                    name="bacteria"
                                    >
                                        <option value='City'>City</option>
                                        <option value='Well'>Well</option>
                                </select>
                            </label>
                            <p>Have you had your water tested for bacteria</p>
                            <label>
                                <select 
                                    onChange={this.handleChange} 
                                    value={this.state.source}
                                    name="source"
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
                            <p>{this.state.character.name}</p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Form;