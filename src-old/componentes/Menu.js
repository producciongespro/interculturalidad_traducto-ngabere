import React from 'react';
import palabras from '../data/palabras.json';
function Menu(props) {
    
    return(
        <div className="row">
            <div className="col-12">
                <h1>
                    Traductor Gnabere
                </h1> 
                {
                    palabras.map((item,i)=>(
                    <button className="btn btn-success mx-2" onClick={props.handleObtenerEjemplo} key={i} id={item.ejemplo} >{item.letra}</button>
                    ))
                }
            </div>
        </div>
    )
}
export default Menu;