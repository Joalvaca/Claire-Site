import React from 'react';
import Header from './components/Header/Header.js'
import Intro from './components/Intro/Intro.js'
import Products from './components/Products/Products.js'
import Form from './components/Form/Form.js'
import Results from './components/Results/Results.js'
import Footer from './components/Footer/footer.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons'

library.add(fab)


class App extends React.Component {

  render(){
 
    return(
      <div>
        <Header/>
        <Intro/>
        <Products/>
        <Form/>
        <Footer/>
      </div>
    )
  }
}

export default App;
