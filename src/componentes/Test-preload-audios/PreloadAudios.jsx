import React from 'react';
import Sound from "react-sound";


const handleError = (error, description) => {
  console.log("ERROR--->", error, "---", description);
}


const PreloadAudios = (props) => {
  const array = props.array;
  console.log("array en preload audios", array);

  //url_audio
  return (
    array.map((item) => { 
      console.log( item.id, "---->", item.t_gnabere, ">>>>",  item.url_audio );
     return (
      <>           
      {
        //<Sound key={item.id} url="./audios/test-preload.mp3" playStatus="STOPPED" onError={handleError} />
      }
      <Sound key={item.id} url={item.url_audio} playStatus="STOPPED" onError={handleError} />
      </> 
     )     
    }
    )


  );
}

export default PreloadAudios;