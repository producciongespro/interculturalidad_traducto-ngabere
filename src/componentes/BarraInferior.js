import React from 'react';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;
function BarraInferior(props) {
    return(
        <React.Fragment>  

           
                <div className="row barras">
                    <div id="" className="col-2">
                    <img id="esquinaII" className="img-fluid" src={imgGenerales+"borde_esquina_izq-01.png"} alt="esquina"/> 
                    </div>
                    <div id="" className="col-5">
                    
                        <img id="inferior" className="img-fluid" src={imgGenerales + "triangulos_abajo-01.png"}  alt="BarraInferior" />
                    </div>
                    <div className="col-5">
                    <img id="logo-mep" className="img-fluid" src={imgGenerales+"logoMep-01.png"} alt="logoMep"/>
                    </div>
                
            </div>
        </React.Fragment>
)
    }
    export default BarraInferior;