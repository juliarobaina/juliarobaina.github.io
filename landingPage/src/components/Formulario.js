import React, {useState} from 'react';
import minion from '../img/minion.jpg';
import minion2 from '../img/minion2.jpg';
import {useSelector} from 'react-redux';
import {increment,decrement} from '../actions'
import {useDispatch} from 'react-redux';
import useForm from '../useForm';
import validate from "../validateLogin";




function Formulario(){
 
  const {handleChange, handleSubmit, values, errors} = useForm(submit, validate);

  
  function submit(){
    console.log("Submitted Succesfully");
  }


    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
  
    
    return(
    
      <div className = "col-md col-sm-10 mx-auto divForm ">
        
        <form action="/add" method="POST" onSubmit={handleSubmit} noValidate>
          <h4 className="text-center" id="titleForm">Garanta Já o seu!</h4>
          <div className="form-group row">
            <label htmlFor="name2" className="col-sm-2 col-form-label">Nome</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="name2" 
                      id="name2" value={values.name2} onChange={handleChange} required placeholder="Digite seu nome" />
              <p className="error">{errors.name2 && errors.name2}</p>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" name="email" className="form-control" 
                      id="email" value={values.email} onChange={handleChange} required placeholder="Digite seu e-mail"/>
              <p className="error">{errors.email && errors.email}</p>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="telefone" className="col-sm-2 col-form-label">Telefone</label>
            <div className="col-sm-10">
              <input type="tel" className="form-control" name="telefone" 
                      id="telefone" value={values.telefone} onChange={handleChange} required placeholder="Digite seu telefone"/>
              <p className="error">{errors.telefone && errors.telefone}</p>
            </div>
          </div>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Miniaturas</legend>
              <div className="col-sm-10">
                <div className="row">
                  <div className="form-check" id="btnRadioMinion1">
                    <input className="form-check-input" type="radio" name="minionRadios" 
                          id="minionRadios1" value="minion" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="minionRadios1">
                      <img id="minion1" src={minion} className="img-fluid img-thumbnail rounded float-left" alt="Miniatura - minion com violão" title="Miniatura - minion com violão"/>
                    </label>
                  </div>
                  <div className="form-check" id="btnRadioMinion2">
                    <input className="form-check-input" type="radio" name="minionRadios" 
                    id="minionRadios2" value="minion2" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="minionRadios2">
                      <img id="minion2" src={minion2} className="img-fluid img-thumbnail rounded float-right" 
                          alt="Miniatura - minion Havaí" title="Miniatura - minion Havaí"/>
                    </label>
                  </div>
                 
                  <div className="col-sm-6" id="qtdDiv">
                    <table>
                      <tbody>
                        <tr>
                          <td className="qtdTd">
                            <button className="btn btn-light" type="button" onClick={() => dispatch(increment())} value={counter}>+</button>
                          </td>
                          <td>
                            <input id="qtdInput" className="form-control" type="text" 
                            readOnly={true} name="qtdMinions" value={counter}></input>
                          </td>
                          <td className="qtdTd">
                          <button className="btn btn-light" type="button" onClick={() => dispatch(decrement())} value={counter}>-</button>          
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="error text-center">{errors.qtdInput && errors.qtdInput}</p>
                    <p className="error text-center">{errors.minionRadios && errors.minionRadios}</p>
                  </div>               
                </div>
              </div>
            </div>
          </fieldset>
         
          <div className="form-group row">
            <div className="col-sm-10">
              <button id="btnMinion" type="submit" className="btn btn-primary" name="enviarReservar">Reservar :)</button>
            </div>
          </div>
        </form>
      </div>
    )
  
}

export default Formulario;