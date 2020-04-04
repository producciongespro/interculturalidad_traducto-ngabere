import React from 'react';
import palabras from '../data/palabras.json';

function MenuLetras(props) {
return(
    <React.Fragment>   
    <div className="col-12">
        {
            palabras.map((item,i)=>(
            <button className="btn btn-success mx-1" onClick={props.handleObtenerPorLetra} key={i} id={item.letra} >{item.letra}</button>
            ))
        }
    </div>
    </React.Fragment>
)
    }
    export default MenuLetras;