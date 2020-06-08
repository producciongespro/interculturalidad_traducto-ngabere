<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>        
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Balsamiq+Sans">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/master.css">
    <script src="main.js"></script>
    <title>Traductor Gnäbere - Administración</title>
</head>
<body>
<div class="container">
<form class="form-horizontal">
<fieldset>
  <div class="row">
    <div class="col-md-12 fondo-ladrillo">

    </div>
  </div>
  <div class="row">
    <div class="col-md-12 simbolos">

    </div>
  </div>

<div class="row fondo-ladrillo">
  <div class="col-md-2"></div>
  <div class="col-md-6 text-center borde-blanco">
    <span class="letrero-1" >Traductor</span>
    <span class="letrero-2" >ngäbere</span>
    <span class="letrero-3" >Módulo</span>
  </div>
  

  <div class="col-md-4">
    <img class="img-fluid" src="./assets/dialogo.png" alt="nubes" >
  </div>
</div>

<br>

<div class="row">
  <div class="col-md-2"></div>
  <div class="col-md-4 grupo-gris">
      Término en Gnäbere
  </div>
  <div class="col-md-4  grupo-rojo"">
    <input id="gnabere" name="gnabere" type="text" placeholder="Escriba el término en Gnäbere" class="form-control input-md" required="">
  </div>
  <div class="col-md-2"></div>
</div>

<div class="row">
  <div class="col-md-2"></div>
  <div class="col-md-4 grupo-gris">
    Término en español
  </div>
  <div class="col-md-4  grupo-rojo">
    <input id="espanol" name="espanol" type="text" placeholder="Escriba el término en español" class="form-control input-md">
  </div>
  <div class="col-md-2"></div>
</div>

<div class="row">
  <div class="col-md-2"></div>
  <div class="col-md-8 grupo-gris">
      Frase en gnäbere
  </div>
  <div class="col-md-2"></div>
</div>

<div class="row">
  <div class="col-md-2"></div>
  <div class="col-md-8 grupo-rojo">
    <textarea class="form-control" id="txtGnabere" name="txtGnabere"></textarea>
  </div>
  <div class="col-md-2"></div>
</div>

<div class="row">
  <div class="col-md-2"></div>
  <div class="col-md-8 grupo-gris">
      Frase en español
  </div>
  <div class="col-md-2"></div>
</div>

<div class="row">
  <div class="col-md-2"></div>
  <div class="col-md-8 grupo-rojo">
  <textarea class="form-control" id="txtEspanol" name="txtEspanol"></textarea>
  </div>
  <div class="col-md-2"></div>
</div>


<div class="row">
  <div class="col-md-2"></div>
  <div class="col-md-4 grupo-gris">
    Audio
  </div>
  <div class="col-md-4  grupo-rojo">
      <input id="audio" name="audio" class="input-file" type="file">
  </div>
  <div class="col-md-2"></div>
</div>

<div class="row">
  <div class="col-md-2"></div>
  <div class="col-md-4 grupo-gris">
    Imagen
  </div>
  <div class="col-md-4  grupo-rojo">
      <input id="imagen" name="imagen" class="input-file" type="file">
  </div>
  <div class="col-md-2"></div>
</div>

<br>

<div class="row">
  <div class="col-md-12">
    <input id="btnEnviar" class="btn  btn-lg btn-block btn-rojo" type="button" value="Enviar">
  </div>
</div>



</fieldset>
</form>
 <div class="div-shadow invisible">
    <span>Enviando...</span>
 </div>
</div>
</body>
</html>