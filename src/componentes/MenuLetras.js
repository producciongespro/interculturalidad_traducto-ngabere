import React from 'react';
import palabras from '../data/palabras.json';

function MenuLetras(props) {
return(
    <React.Fragment>  
        <div className="col-1">
        <img className="esquina" src="https://recursos.mep.go.cr/2020/oscar/traductor/webservices/borde_izq-01.png" alt="esquina"/>
            </div> 
    <div className="col-9">
        {
            palabras.map((item,i)=>(
            <button className="par img-fluid" onClick={props.handleObtenerPorLetra} key={i} id={item.letra} >{item.letra}</button>
            ))
        }
          
    </div>
    <div className="col-2">
    <img className="img-fluid" src="https://recursos.mep.go.cr/2020/oscar/traductor/webservices/cabezas-01.png" alt="humanos"/></div> 
    </React.Fragment>
)
    }
    export default MenuLetras;