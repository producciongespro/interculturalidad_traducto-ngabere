import React, { useEffect } from "react";
import assets from "../data/config.json";
import sonidos from "../data/config.json";
//import {getImage, getAudio} from "../utils/preload-assets";
import { getImage, getUrl } from "../utils/preload-assets";
import { sendData } from "gespro-utils/akiri";
import Social from "./Social/Social";
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
  const resp = await sendData(
    "https://recursos.mep.go.cr/2020/oscar/webservices/registrar_social.php",
    data
  );
  console.log("resp", resp);
};



function DetalleMovil(props) {



  let urlAudio;
  if (props.info) {
    urlAudio = getUrl(props.audios, props.info.id);
  }
  //console.log("----------------------------urlAudio", urlAudio);

  useEffect(() => {
   setup();
  });

  const setup = async () => {
    if (props.info && props.info !== "limpiar") {
      const data = { id: props.info.id };
      const resp = await sendData(
        "https://recursos.mep.go.cr/2020/oscar/webservices/registrar_vista.php",
        data
      );
      console.log("respuesta del servidor vistas:", resp);
    }
  };






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
                        src={urlAudio}
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

export default DetalleMovil;
