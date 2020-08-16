import React, {Component} from 'react';
import minion5 from '../img/minion5.jpg';

class Banner extends Component{
    render(){
      return(
        
        <div className="col-md bannerDiv">
          <img className="img-fluid banner" alt="Miniatura Minnion banner principal" title="Miniatura Minnion banner principal" src={minion5}/>
        </div>
      )
    }
}

export default Banner;