import React from 'react';
import Header from './components/Header/Header.js'
import Intro from './components/Intro/Intro.js'
import Products from './components/Products/Products.js'
import Form from './components/Form/Form.js'
import Results from './components/Results/Results.js'
import Footer from './components/Footer/footer.js'


class App extends React.Component {

  render(){
 
    return(
      <div>
        <Header/>
        <Intro/>
        <Products/>
        <Form/>
        <Results/>
        <Footer/>
      </div>
    )
  }
}

export default App;
