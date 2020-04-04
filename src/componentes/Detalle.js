import React from 'react';
import assets from '../data/config.json';
import sonidos from '../data/config.json';
const imgGenerales = assets.img.general;
const audios = sonidos.mp3.general;

function Detalle(props) {

    return (
        <div className="col-8"> 
       
            <div className="row" id="detalle">
               
               
            {
                props.info !== null ?
                (
                    <React.Fragment> 
                        <div className="col-6">
                         <span className="espanol">  {props.info.t_espanol}</span>                  
                        <div className="gnabere">
                        <span className="">
                             {props.info.t_gnabere}
                            </span> </div>
                        <p className="textos_gnabere">
                            {
                                props.info.texto_gnabere
                            }
                        </p>
                        <p className="textos_espanol">
                            {
                                props.info.texto_espanol
                                
                            }
                        </p>
                        <span className="iconos"><i className="fa fa-thumbs-o-up">
                            {
                                props.info.me_gusta
                            }
                        </i></span>
                        <span className="iconos"><i className="fa fa-thumbs-o-down">
                            {
                                props.info.no_me_gusta
                            }
                        </i></span>
                        <span className="iconos"><i className="fa fa-eye">
                            {
                                props.info.vistas
                            }
                        </i></span> 
                        </div>
                        <div className="col-6" >
                            <img id="" src={imgGenerales + props.info.url_imagen}  alt="Gallo" />
                            <br/><audio src={audios + props.info.url_audio} controls="controls" type="audio/mpeg" preload="preload">
</audio>
                        </div>
                    </React.Fragment>
                ):( 
                   
                    <React.Fragment>
                            <p>No hay palabra seleccionada</p>
                            {/* {document.getElementById('detalle').innerHTML=''} */}
                    </React.Fragment>
                )
            }

            </div>
 
        </div>
    )
}

export default Detalle;