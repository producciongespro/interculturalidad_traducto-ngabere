import React from 'react';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;
function EducaticoMovil(props) {
    return(
        <React.Fragment>  

            <div className="row">
            <div id="logos_mepMovil" className="col-12">
                <div className="">
                <div id="educatico-divMovil" className="text-center">
                    <img id="educaticoMovil" className="img-fluid educaticoMovil" src={imgGenerales + "visiteeducatico-01.png"}  alt="Educatico" /> 
                </div>
                <br/>
                <img id="esquinaIDMovil" className="img-fluid" src={imgGenerales+"borde_der-01.png"} alt="der"/>
                
                </div>
            </div>
        </div>
        </React.Fragment>
)
    }
    export default EducaticoMovil;