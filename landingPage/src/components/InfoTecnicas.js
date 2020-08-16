import React, {Component} from 'react';

class InfoTecnicas extends Component{

    render(){
      return(
        <div className="container-fluid descricaoProd">
          <h2 className="text-center">Informações Técnicas</h2>
          <div className="col-md">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="row">Marca:</th>
                    <td>Minions Toy</td>
                    
                  </tr>
                  <tr>
                    <th scope="row">Identificação:</th>
                    <td>465459798</td>
                    
                  </tr>
                  <tr>
                    <th scope="row">Material:</th>
                    <td>PVC</td>
                    
                  </tr>
                  <tr>
                    <th scope="row">Altura:</th>
                    <td>5 cm</td>
                    
                  </tr>
                    
                </tbody>
              </table>
  
          </div>
        </div>
      )
    }
  }
  

export default InfoTecnicas;