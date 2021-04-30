import React from 'react';

const handleError =(error)=> {
    console.log("Error", error);
}



const PreloadAudios = (props) => {
    return ( 
        <div className="row">
          <audio 
          controls 
          src="./audios/test-preload.mp3"
          onError={handleError}

          ></audio>
        </div>
     );
}
 
export default PreloadAudios;