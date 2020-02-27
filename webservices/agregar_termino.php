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

$t_espanol = utf8_decode($dataObject-> t_espanol);
$t_gnabere = utf8_decode( $dataObject-> t_gnabere) ;
$texto = utf8_decode($dataObject-> texto); 
$url_audio = utf8_decode($dataObject-> url_audio);
$url_imagen = utf8_decode($dataObject-> url_imagen);
$id_usuario = $dataObject-> id_usuario;

  $conn = conectarDB();
    
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $sql = "INSERT INTO `terminos` (`t_espanol`, `t_gnabere`, `url_audio`, `url_imagen`, `texto`, `id_usuario`) VALUES ('$t_espanol', '$t_gnabere', '$url_audio', '$url_imagen', '$texto', '$id_usuario')";

  if ($conn->query($sql) === TRUE) {
        echo json_encode(array('error'=>'false','msj'=>'Recurso agregado satisfactoriamente'));
  } else {
    echo json_encode(array('error'=>'true','msj'=>$conn->error)); 
  }

  $conn->close();

?>