import React from 'react';
import palabras from '../data/palabras.json';

function MenuLetras(props) {
return(
    <React.Fragment>   
    <div className="col-12">
        {
            palabras.map((item,i)=>(
            <button className="par" onClick={props.handleObtenerPorLetra} key={i} id={item.letra} >{item.letra}</button>
            ))
        }
          <img src="imagenes/humans.jpg" alt="humanos"/>
    </div>
    </React.Fragment>
)
    }
    export default MenuLetras;