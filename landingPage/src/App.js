import React, {Component} from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import DescricaoProduto from './components/DescricaoProduto';
import InfoTecnicas from './components/InfoTecnicas';
import Footer from './components/Footer';

import './css/index.css';





class App extends Component{
  

  render(){
    return( 
      <div className="container">
        <div className="col-md-6 titleDiv">
          <h1 id="title">Reserve seu minion antes que acabe!</h1>
        </div>
        <div className="row">
         
          <Banner/>
          <Formulario />
            
        </div>
        <DescricaoProduto/>
        <InfoTecnicas/>
        <Footer/>
      </div>
     
    )   
  }
}



export default App;
