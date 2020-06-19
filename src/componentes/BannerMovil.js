import React from 'react';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;
function BannerMovil(props) {
    return(
        <React.Fragment>  
            <div className="row">
                <div className="col-12">
                     <img id="btn-acercaDe" className="img-fluid movil" src={imgGenerales+"acercade-02.png"} alt="arr"/>
               
                     <img id="banner" className="banner img-fluid" src={imgGenerales + "bannerMovil.png"}  alt="Portada" />
                </div>               
            </div>
        </React.Fragment>
)
    }
    export default BannerMovil;