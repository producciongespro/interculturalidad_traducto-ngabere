export default async function preloadImage(images, url, id, urlNoImage ) {
  const image = {
    id: id,
    img: new Image()
  };
  image.img.src = url;
  images.push(image);
  image.img.onerror = function () {
    handleError(this, id, images, urlNoImage )
  }

  //console.log("Imagen cargada de ", url);
}


const handleError=(e, id, images, urlNoImage)=> {
  console.log("Error en", id, ">>>>", e);
  for (let index = 0; index < images.length; index++) {
    if (images[index].id == id) {
      images[index].img.src = urlNoImage
    }
    
  }
}
