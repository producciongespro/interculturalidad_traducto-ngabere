import React from 'react';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;
function Educatico(props) {
    return(
        <React.Fragment>  

            <div className="row">
            <div id="logos_mep" className="col-12">
                <div className="">
                <img id="educatico" className="img-fluid educatico" src={imgGenerales + "educatico.jpg"}  alt="Educatico" />
                <br/>
                <img id="esquinaID" className="" src={imgGenerales+"esquinaID.png"} alt="der"/>
                <img id="logo-mep" className="" src={imgGenerales+"logoMep-01.png"} alt="der"/>
                </div>
            </div>
        </div>
        </React.Fragment>
)
    }
    export default Educatico;