import React from "react";
import assets from "../data/config.json";
import sonidos from "../data/config.json";
import getStoredImg from "../utils/customStorage";

import Social from "./Social/Social";

// import error from './Errorimagen';
const imgGenerales = assets.img.general;
const audios = sonidos.mp3.general;

const configSocial = {
  fill: "#0ab3f2",
  fill2: "#ff5733", 
  size: "small"    
};

const item = {
  id: "123",
  likes: 125,
  dislikes: 32,
  views: 4587  
};

const putLikesDislikes = (data) => {
  console.log("data", data);
};



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
                {
                  console.log("props.info.url_imagen", props.info.url_imagen)
                }              
                <img
                  className="img-fluid"                  
                  src={ imgGenerales + props.info.url_imagen }
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
                  
                  <Social  putLikesDislikes={putLikesDislikes} config= {configSocial} item={item} />
                  
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
