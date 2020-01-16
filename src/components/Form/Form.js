import React from "react";
import './Form.css';



class Form extends React.Component {
 constructor(props){
     super(props);
     this.state={
         value:'',
         select:'',
         value:'',
         };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);   
 }

 handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  } 


  render(){
    return(
        <div className='form'>
            <h1>Form</h1>
            <div className='form-section'>
                <section className='user-form'>
                    <form className='user-form' onSubmit={this.handleSubmit}>
                        <h1>Hello</h1>
                         <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                         </label>
                         <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                         </label>
                         <label>
                             bacteria: 
                             <select onChange={this.handleChange}>
                                 <option select='yes'>yes</option>
                                 <option select='no'>no</option>
                             </select>
                         </label>
                         <input type="submit" value="Submit" />
                    </form>
                </section>
                <section className='user-result'>
                    <div>
                        <h1>Results</h1>
                    </div>
                </section>
            </div>
        </div>
        ); 
    }
}

export default Form; 