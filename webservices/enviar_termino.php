<?php
//sleep(2);
    include "conectar.php";
    // $msj = "Solicitud de conexión ";
    $mysqli = conectarDB();
	$gnabere = utf8_decode($_POST['gnabere']);
    $espanol = utf8_decode($_POST['espanol']);
    $txtEspanol = utf8_decode($_POST['txtEspanol']);
	$txtGnabere = utf8_decode($_POST['txtGnabere']);
    $audio = $_FILES['audio']['name'];
    $imagen = $_FILES['imagen']['name'];
    // $idUsuario = $_POST['id'];
	$audioDirectory = "subidos/audios/";
    $imagenDirectory = "subidos/imagenes/";
    // $msj = $msj ." datos recibidos " .  $titulo . " ";

/*
    //captura la ruta del archivo enviado.
    $archivo = $_POST['inputPdf'];
   // echo $archivo;
   echo $institucion;
   echo $autor;
   */

              //get the name of the file
            $fecha=strftime( "%Y-%m-%d-%H-%M-%S", time() );

            $filename = $fecha.basename( $_FILES['imagen']['name'], ".jpg");
            $filename2 = $fecha.basename( $_FILES['audio']['name'], ".mp3");
            //remove all characters from the file name other than letters, numbers, hyphens and underscores
            $filename = preg_replace("/[^A-Za-z0-9_-]/", "", $filename).".jpg";
            $filename2 = preg_replace("/[^A-Za-z0-9_-]/", "", $filename2).".mp3";
            //name the thumbnail image the same as the pdf file
            $thumb = basename($filename, ".jpg");
            $thumb2 = basename($filename2, ".mp3");

  if((move_uploaded_file($_FILES['imagen']['tmp_name'], $imagenDirectory.$filename)) AND (move_uploaded_file($_FILES['audio']['tmp_name'], $audioDirectory.$filename2))) {

            //the path to the PDF file
            $pdfWithPath = '../subidos/imagenes/'.$filename;
            //add the desired extension to the thumbnail

            $thumb = $thumb.".jpg";
            $thumb2 = $thumb2.".mp3";
       						// echo "<script>console.log ('$pdfWithPath')</script>";
						// echo "<script>console.log ('$thumbDirectory$thumb')</script>";
            // exec("convert \"{$pdfWithPath}[0]\" -colorspace sRGB -scale 200x259 -background white -flatten  $thumbDirectory$thumb",  $out ,  $outCode );
            
            
            $rutaAudio = "subidos/audios/".$thumb2;
            $rutaImagen = "subidos/imagenes/".$thumb;
            $rutaDocumento = "subidos/imagenes/".$filename;
            //echo $rutaImagen;
          //  echo "<p><a href=\"$pdfWithPath\"><img src=\"pdfimage/$thumb\" alt=\"\" /></a></p>";

}

if ($mysqli) {
    mysqli_query($mysqli,"INSERT INTO `terminos`(`t_gnabere`, `t_espanol`, `texto_espanol`, `texto_gnabere`, `url_audio`, `url_imagen`, `id_usuario`) VALUES ('$gnabere','$espanol','$txtEspanol','$txtGnabere','$rutaAudio','$rutaImagen',1)") or die ();
    echo json_encode(array('error'=>'false','msj'=>"Término agregado exitosamente"));
}
else {
  echo json_encode(array('error'=>'true','msj'=>"Error al subir el archivo"));
}
?>
