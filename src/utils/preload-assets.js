//IMAGENES
exports.preloadImage = function (images, url, id, urlNoImage ) {
  /*
  images: empty array
  url: path image url 
  id: record id
  urlNoImage: path no image.jpg
   */
  const image = {
    id: id,
    img: new Image()
  };
  image.img.src = url;
  images.push(image);
  image.img.onerror = function () {
    handleErrorImage(this, id, images, urlNoImage )
  }
  //console.log("Imagen cargada de ", url);
  return true;
}


const handleErrorImage=(e, id, images, urlNoImage)=> {
  console.log("Error en", id, ">>>>", e);
  for (let index = 0; index < images.length; index++) {
    if (images[index].id === id) {
      images[index].img.src = urlNoImage
    }
    
  }
}

exports.getImage = function (images, id) {
  let tmpUrl=null;
  //console.log("id---->", id);
  //console.log("images----->", images);
  images.forEach(item => {
      //console.log(item);
      if (item.id === id) {            
          tmpUrl= item.img.src;            
      };       
      
  });
  return tmpUrl;
}
