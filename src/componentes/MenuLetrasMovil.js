import React from 'react';
import palabras from '../data/palabras.json';

function MenuLetrasMovil(props) {
return(
    <React.Fragment>  
    <div className="row text-center">
        {/* <div className="col-3">
            <img className="esquinaMovil" src="https://recursos.mep.go.cr/2020/oscar/traductor/webservices/borde_izq-movil.png" alt="esquina"/>
        </div>  */}
        <div className="col-12 letrasMovil">
            {
                palabras.map((item,i)=>(
                <button className="parMovil img-fluid" onClick={props.handleObtenerPorLetra} key={i} id={item.letra} >{item.letra}</button>
                ))
            }
            
        </div>
    </div>
    </React.Fragment>
)
    }
    export default MenuLetrasMovil;