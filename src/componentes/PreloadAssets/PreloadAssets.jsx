import React, { useState, useEffect } from 'react';
import "./preloadAssets.css";


export default function PreloadAssets (props) {
    const alt = props.alt;
    const imgFallback = props.imgFallback;    
    const [isError, setIsError] = useState(false);
    const [url, setUrl] = useState(props.url);

  
  
    const validarError = (e) => {
      //console.log("Error", e);
      setIsError(true);
    };
  
    useEffect(() => {
      if (isError) {
        setUrl(imgFallback);
      }
      console.log(url);
    }, [isError]);
  
    return (
      <img className="img-invisible" onError={validarError} src={url} alt={alt} />
    );
    
}

