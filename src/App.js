import React from 'react';
import Header from './components/Header.js'
import Intro from './components/Intro.js'
import Products from './components/Products.js'
import Form from './components/Form.js'
import Results from './components/Results'
import './unit.css';
import './header.css';
import './products.css';






class App extends React.Component {

  render(){
 
    return(
      <div>
        <Header/>
        <Intro/>
        <Products/>
        <Form/>
        <Results/>
      </div>
    )
  }
}

export default App;
