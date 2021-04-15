import React  from "react";
import assets from "../data/config.json";
import sonidos from "../data/config.json";
import Imagen from "./Imagen";
// import error from './Errorimagen';
const imgGenerales = assets.img.general;
const audios = sonidos.mp3.general;

function Detalle(props) {
    if (props.info) {
        console.log("props.info------>", props.info);    
        console.log("props.info.url_imagen", props.info.url_imagen);        
      }

  return (
    <div className="col-9">
      <div className="row" id="detalle">
        {props.info === "limpiar" ? (
          <React.Fragment>
            <div className="col-12">
              <p alt="No hay palabra seleccionada">
                No hay palabra seleccionada
              </p>
            </div>
          </React.Fragment>
        ) : props.info !== null ? (
          <React.Fragment>
            <div className="col-6">
              <span alt={props.info.t_espanol} className="espanol">                
                {props.info.t_espanol}
              </span>
              <div className="gnabere">
                <span alt={props.info.t_gnabere} className="">
                  {props.info.t_gnabere}
                </span>
              </div>
              <p alt={props.info.texto_gnabere} className="textos_gnabere">
                {props.info.texto_gnabere}
              </p>
              <p alt={props.info.texto_espanol} className="textos_espanol">
                {props.info.texto_espanol}
              </p>
            </div>
            <div id="audio-imagen" className="col-6">
              <br />
              <div className="text-center">
                <Imagen
                  className="img-fluid"                  
                  url={imgGenerales + props.info.url_imagen}
                  alt={props.info.t_espanol}
                  imgFallback="./imagenes/no_image.png"
                />
              </div>
              {props.info.url_audio !== null ? (
                <React.Fragment>
                  <div className="text-center">
                    <audio
                      src={audios + props.info.url_audio}
                      controls="controls"
                      type="audio/mpeg"
                      preload="preload"
                    ></audio>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="text-center">
                    <img
                      alt="Sin audio"
                      className="img-fluid"
                      id=""
                      src={imgGenerales + "/subidos/imagenes/no_audio.png"}
                      alt="Sin audio"
                    />
                  </div>
                </React.Fragment>
              )}

              <div className="row text-center">
                <div className="col-12">
                  <span className="iconos">
                    <i className="fa fa-thumbs-o-up">{props.info.me_gusta}</i>
                  </span>
                  <span className="iconos">
                    <i className="fa fa-thumbs-o-down">
                      {props.info.no_me_gusta}
                    </i>
                  </span>
                  <span className="iconos">
                    <i className="fa fa-eye">{props.info.vistas}</i>
                  </span>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>No hay palabra seleccionada</p>
            {/* {document.getElementById('detalle').innerHTML=''} */}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Detalle;
