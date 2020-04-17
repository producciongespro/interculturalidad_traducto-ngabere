import React from 'react';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;
function Educatico(props) {
    return(
        <React.Fragment>  

            <div className="row">
            <div className="col-12">
                <div className="">
                <img id="educatico" className="img-fluid educatico" src={imgGenerales + "educatico.jpg"}  alt="Educatico" />
                </div>
            </div>
        </div>
        </React.Fragment>
)
    }
    export default Educatico;