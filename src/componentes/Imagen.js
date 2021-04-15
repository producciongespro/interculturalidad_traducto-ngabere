import React, { useState, useEffect } from 'react';

const Imagen = (props) => {
  const alt = props.alt;
  const imgFallback = props.imgFallback;
  const className = props.className;
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(props.url);

  const validarError = (e) => {
    //console.log("Error", e);
    setIsError(true);
  };


  
  useEffect(() => {
    setUrl(props.url);
    console.log("REcibida en IMAGEN props.url", props.url);
  });
  
  
  
  useEffect(() => {
    if (isError) {
      setUrl(imgFallback);
    }
    console.log(url);
  }, [isError]);

  return (
    <img className={className} onError={validarError} src={url} alt={alt} />
  );
};

export default Imagen;