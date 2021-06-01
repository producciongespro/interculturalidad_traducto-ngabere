<?php
require 'conectar.php';
 echo "<script>console.log ('Actualizando votos')</script>";
$conexion = conectarDB();
if($_POST)
  {
       $nuevoVoto = $_POST['voto'];
       $codigo = $_POST['id'];
       echo "<script>console.log ('$codigo')</script>";
       echo "<script>console.log ('$nuevoVoto')</script>";
         $query=mysqli_query($conexion,"UPDATE cuentosenviados SET votos = (votos + $nuevoVoto) WHERE codigo = $codigo ");
         $query2=mysqli_query($conexion,"UPDATE cuentosenviados SET votantes = (votantes + 1) WHERE codigo = $codigo ");
         $query3=mysqli_query($conexion,"UPDATE cuentosenviados SET Promedio_votos = (votos/votantes) WHERE codigo = $codigo ");
   }
?>
