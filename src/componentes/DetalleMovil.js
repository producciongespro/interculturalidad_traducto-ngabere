import React from "react";
import assets from "../data/config.json";
import sonidos from "../data/config.json";
import {getImage, getAudio} from "../utils/preload-assets";
const imgGenerales = assets.img.general;
const audios = sonidos.mp3.general;

function DetalleMovil(props) {

  let urlAudio;
  if (props.info) {
    urlAudio = getAudio(props.audios, props.info.id);  
  }

  return (
    <div className="col-9" id="detalleMovil">
      <div className="row">
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
            <div className="col-12">
              <p alt={props.info.t_espanol} className="espanolMovil">
                {" "}
                {props.info.t_espanol}
              </p>
              <div className="gnabereMovil">
                <p alt={props.info.t_gnabere} className="">
                  {props.info.t_gnabere}
                </p>{" "}
              </div>
              <p alt={props.info.texto_gnabere} className="textos_gnabereMovil">
                {props.info.texto_gnabere}
              </p>
              <p alt={props.info.texto_espanol} className="textos_espanolMovil">
                {props.info.texto_espanol}
              </p>
              <div className="text-center">
                <img
                  className="img-fluid imgMovil"                  
                  src={getImage(props.images, props.info.id  )}
                  alt={props.info.t_espanol}
                />
              </div>

              <div className="text-center">
                    {urlAudio ? (
                      <audio
                        src={audios + urlAudio}
                        controls="controls"
                      ></audio>
                    ) : (
                      <img className="img-fluid" src="./imagenes/no_audio.png" alt="no audio" />
                    )}
                  </div>   

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

export default DetalleMovil;
