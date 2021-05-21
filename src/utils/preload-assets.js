//IMAGENES
exports.preloadImage = function (images, url, id, urlNoImage) {
  /*
  images: empty array
  url: path image url 
  id: record id
  urlNoImage: path no image.jpg
   */
  const image = {
    id: id,
    img: new Image(),
  };
  image.img.src = url;
  image.img.onerror = function () {
    handleErrorImage(this, id, images, urlNoImage);
  };
  images.push(image);
  //console.log("Imagen cargada de ", url);
  return true;
};

exports.getImage = function (images, id) {
  let tmpUrl = null;
  //console.log("id---->", id);
  //console.log("images----->", images);
  images.forEach((item) => {
    //console.log(item);
    if (item.id === id) {
      tmpUrl = item.img.src;
    }
  });
  return tmpUrl;
};

const handleErrorImage = (e, id, images, urlNoImage) => {
  //console.log("Error en", id, ">>>>", e);
  for (let index = 0; index < images.length; index++) {
    if (images[index].id === id) {
      images[index].img.src = urlNoImage;
    }
  }
};

//AUDIOS

exports.preloadAudio = function (audios, url, id) {
  const itemAudio = {
    id: id,
    audio: url != null ? new Audio(url) : null,
  };
/*
TODO: Validar si itemaudio no es nulo para asignarle el handler
  itemAudio.audio.onerror = function () {
    console.log("error");
  };
*/
  audios.push(itemAudio);
};

exports.getAudio = function (audios, id) {
  let urlAudio = null;

  audios.forEach((item) => {
    if (item.id === id) {
      if (item.audio) {
        urlAudio = item.audio.src;
      }
    }
  });
  return urlAudio;
};
