import React from 'react';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;
function Banner(props) {
    return(
        <React.Fragment>  

            <div className="row">
            <div className="col-12">
                <div className="">
                <img id="banner" className="banner img-fluid" src={imgGenerales + "banner.png"}  alt="Portada" />
                </div>
            </div>
        </div>
        </React.Fragment>
)
    }
    export default Banner;