import React from "react";
import assets from "../data/config.json";
import sonidos from "../data/config.json";
import getStoredImg from "../utils/customStorage";
// import error from './Errorimagen';
const imgGenerales = assets.img.general;
const audios = sonidos.mp3.general;



function Detalle(props) {
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
                {
                  console.log("props.info.id",props.info.id)
                }               
                <img
                  className="img-fluid"
                  src={getStoredImg(props.info.id)}
                  alt={props.info.t_espanol}
                />
              </div>
              {props.info.url_audio ? (
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
