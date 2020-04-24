import React from 'react';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;
function Banner(props) {
    return(
        <React.Fragment>  

            <div className="row">
            <div className="col-1"></div>
            <div id="barra-banner1" className="col-5">
            <img id="banner" className="banner img-fluid" src={imgGenerales + "banner.png"}  alt="Portada" />
            </div>
            <div id="barra-banner" className="col-3"> </div>
            <div className="col-2">
                <img className="img-fluid" src="http://localhost/webservices/traductor/nubes.png" alt="conversa"/>
            </div>
            <div className="col-1"></div>
        </div>
        </React.Fragment>
)
    }
    export default Banner;