//IMAGENES
exports.preloadImages = function (array, images, urlNoImage, imgGenerales) {
  /*
  images: empty array
  url: path image url 
  id: record id
  urlNoImage: path no image.jpg
   */
  let image;
  array.forEach((element) => {
    image = {
      id: element.id,
      img: new Image(),
    };
    //caraga de la url de la img
    image.img.src = imgGenerales + element.url_imagen;

    //handle fallback para las imagenes no encontradas
    image.img.onerror = function () {
      handleErrorImage(this, element.id, images, urlNoImage);
    };
    images.push(image);
    console.log("Imagen cargada de ", imgGenerales + element.url_imagen);
  });
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

exports.preloadAudios = function (array, audios) {
  let itemAudio;

  array.forEach((element) => {
    // console.log(element.url_audio);
    //console.log(typeof(element.url_audio));

    if (element.url_audio) {
      const audio = new Audio(element.url_audio);
      itemAudio = {
        id: element.id,
        audio,
      };
      audios.push(itemAudio);
    }
  });
};

exports.getUrl = function (array, id) {
  console.log("id", id);
  let tmpUrl = null;

  array.forEach((element) => {
    if (element.id == id) {
      console.log("URL", element.audio.src);
      tmpUrl = element.audio.src;
    }
  });
  return tmpUrl;
};

exports.renderAudio = function (url) {
  const visor = document.getElementById("visor");
  if (url) {
    visor.innerHTML = `
              <audio  controls /> 
                  <source src= ${url}  type= "audio/mp3">
              </audio>
              `;
  } else {
    visor.innerHTML = `
              <img src="./assets/img/no_audio.png" alt="no audio" />
              `;
  }
};
