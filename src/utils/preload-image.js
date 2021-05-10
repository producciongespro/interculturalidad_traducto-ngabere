


export default async function preloadImage(image, url) {
  const res = await fetch(url);
  const blob = await res.blob();
  image.src = url;
  console.log("Imagen cargada de ", url);  
  }