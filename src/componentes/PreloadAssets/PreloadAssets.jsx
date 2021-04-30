import React, { useState, useEffect } from "react";
import "./preloadAssets.css";
const imagenes = [];

export default function PreloadAssets(props) {
  const alt = props.alt;
  const id = props.id;
  const url = props.url;

  const validarError = (e) => {
    console.log("Error en id ---->", id);
    const imagenes = JSON.parse(sessionStorage.getItem("imagenes"));
    const limite = imagenes.length;
    for (let index = 0; index < limite; index++) {
      if (imagenes[index].id === id) {
        imagenes[index].isError = true;
      }
    }
    sessionStorage.setItem("imagenes", JSON.stringify(imagenes));
  };

  const handleErrorAudio =(error)=> {
    console.log("Error", error);
}

  useEffect(() => {
    //console.log("imagenes*********", imagenes);
    const imagen = { id, url, isError: false };
    imagenes.push(imagen);
    sessionStorage.setItem("imagenes", JSON.stringify(imagenes));
  }, []);

  return (
    <div className="row">
      <img className="img-invisible" onError={validarError} src={url} alt={alt} />
     { /*
      <audio
        controls
        src="./audios/test-preload.mp3"
        onError={handleErrorAudio}

      ></audio>
      */
    }
    </div>


  );
}
