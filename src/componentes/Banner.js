import React from 'react';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;
function Banner(props) {
    return(
        <React.Fragment>  

            <div className="row">
                <div className="col-12">
                <img id="btn-acercaDe" className="img-fluid" src={imgGenerales+"acercade-01.png"} alt="arr"/>
                <div className="row">
                    <div id="barra-banner1" className="col-11">
                    
                        <img id="banner" className="banner img-fluid" src={imgGenerales + "banner.png"}  alt="Portada" />
                    </div>
                    <div className="col-1">
                    
                    </div>

                </div>
                </div>
                
            </div>
        </React.Fragment>
)
    }
    export default Banner;