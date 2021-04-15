const getStoredImg = (id) => {
    const string = sessionStorage.getItem("imagenes");
    const array = JSON.parse(string);
    let tmpUrl;
    for (let index = 0; index < array.length; index++) {
      if (array[index].id === id) {
        if (!array[index].isError) {
          tmpUrl = array[index].url;
        } else {
          tmpUrl = "./imagenes/no_image.png";
        }
      }
    }
    return tmpUrl;
  };


  export default getStoredImg;