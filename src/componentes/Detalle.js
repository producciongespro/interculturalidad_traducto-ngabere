import React from "react";
import assets from "../data/config.json";
import sonidos from "../data/config.json";
import { getImage, getAudio } from "../utils/preload-assets";
import { sendData} from "gespro-utils/akiri";

import Social from "./Social/Social";

// import error from './Errorimagen';
const imgGenerales = assets.img.general;
const audios = sonidos.mp3.general;

const configSocial = {
  fill: "#0ab3f2",
  fill2: "#ff5733",
  size: "small",
};

//https://recursos.mep.go.cr/2020/oscar/webservices/registrar_social.php
//http://localhost:3500/test

const putLikesDislikes = async (data) => {
  console.log("data>>>>>>>>", data);
  const resp = await sendData("https://recursos.mep.go.cr/2020/oscar/webservices/registrar_social.php", data);
  console.log("resp", resp);
  
};

function Detalle(props) {
  let urlAudio;
  if (props.info) {
    urlAudio = getAudio(props.audios, props.info.id);  
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
                {console.log("props.info.id", props.info.id)}
                <img
                  className="img-fluid"
                  src={getImage(props.images, props.info.id)}
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
                  <Social
                    putLikesDislikes={putLikesDislikes}
                    config={configSocial}
                    item={props.info}
                  />
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
