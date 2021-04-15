import React, { useState, useEffect } from "react";
import "./preloadAssets.css";
const imagenes = [];

export default function PreloadAssets(props) {
  const alt = props.alt;
  const imgFallback = props.imgFallback;
  const id = props.id;
  
  const [url, setUrl] = useState(props.url);

  const validarError = (e) => {
    //console.log("Error", e);
    setUrl(imgFallback);
  };

  useEffect(() => {
    console.log("imagenes*********", imagenes);
        sessionStorage.setItem("imagenes", JSON.stringify(imagenes));
  }, []);



  useEffect(() => {
    //console.log("IMAGEN---->", id, "--", url);
    const imagen = {id, url };
    imagenes.push(imagen);
  }, [url]);


  return (
    <img className="img-invisible" onError={validarError} src={url} alt={alt} />
  );
}

/*

const imagen = { id, url };
    imagenes.push

 */