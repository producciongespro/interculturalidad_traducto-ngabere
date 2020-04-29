import React from 'react';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;
function Educatico(props) {
    return(
        <React.Fragment>  

            <div className="row">
            <div id="logos_mep" className="col-12">
                <div className="">
                <div id="educatico-div" className="text-center">
                    <img id="educatico" className="img-fluid educatico" src={imgGenerales + "visiteeducatico-01.png"}  alt="Educatico" /> 
                </div>
                <br/>
                <img id="esquinaID" className="img-fluid" src={imgGenerales+"borde_der-01.png"} alt="der"/>
                
                </div>
            </div>
        </div>
        </React.Fragment>
)
    }
    export default Educatico;