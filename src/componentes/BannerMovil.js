import React from 'react';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;
function BannerMovil(props) {
    return(
        <React.Fragment>  
          
               
                     <img id="banner" className="banner img-fluid" src={imgGenerales + "bannerMovil.png"}  alt="Portada" />

        </React.Fragment>
)
    }
    export default BannerMovil;