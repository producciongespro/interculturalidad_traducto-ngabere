function ImgError()
{
        var img1 = document.getElementById('imagenTermino');
        console.log("Imagen: "+img1);
        if  (img1.onerror){
           return true;
      }
        else {
           return false;
    }
}
export default  ImgError;