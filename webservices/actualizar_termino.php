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
$id_nivel = $dataObject-> id_nivel;
$materia =  utf8_decode($dataObject-> materia);  
$anno = utf8_decode($dataObject-> anno);
$nombre = utf8_decode( $dataObject-> nombre) ;
$descripcion = utf8_decode($dataObject-> descripcion); 
$url = utf8_decode($dataObject-> url);        
$apoyos = $dataObject-> apoyo;
$usuario =  utf8_decode($dataObject-> id_usuario);
   $actualizacion = "UPDATE `recursos` SET `materia`='$materia',`anno`='$anno',`nombre`='$nombre',`id_nivel`='$id_nivel',`descripcion`='$descripcion', `url`='$url',`apoyos`='$apoyos',`id_usuario`='$usuario' WHERE `id`='$id'";

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