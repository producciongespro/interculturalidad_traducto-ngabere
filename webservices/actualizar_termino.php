<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);  
require 'conectar.php';
$conexion = conectarDB();
$id = $dataObject-> id;
$t_espanol = utf8_decode($dataObject-> t_espanol);
$t_gnabere = utf8_decode( $dataObject-> t_gnabere) ;
$texto = utf8_decode($dataObject-> texto); 
$url_audio = utf8_decode($dataObject-> url_audio);
$url_imagen = utf8_decode($dataObject-> url_imagen);
$id_usuario = $dataObject-> id_usuario;
   $actualizacion = "UPDATE `terminos` SET `t_espanol`='$t_espanol',`t_gnabere`='$t_gnabere',`url_audio`='$url_audio',`url_imagen`='$url_imagen',`texto`='$texto',`id_usuario`='$id_usuario' WHERE `id`=$id";

   $resultadoActualizacion = mysqli_query($conexion, $actualizacion); 

   if($resultadoActualizacion)
   {
    echo json_encode(array('error'=>'false','msj'=>'Datos actualizados correctamente'));
   }
   else
   {
    echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
   }
?>