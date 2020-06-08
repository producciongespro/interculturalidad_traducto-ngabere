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
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <script src="main.js"></script>
    <title>Traductor Gnäbere - Administración</title>
</head>
<body>
<div class="container">
<form class="form-horizontal">
<fieldset>

<!-- Form Name -->
<legend>Agregar término nuevo</legend>

<!-- Text input-->


<div class="form-group">
  <label class="col-md-4 control-label" for="gnabere">Término en Gnäbere</label>  
  <div class="col-md-5">
  <input id="gnabere" name="gnabere" type="text" placeholder="Escriba el término en Gnäbere" class="form-control input-md" required="">
  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="espanol">Término en español</label>  
  <div class="col-md-5">
  <input id="espanol" name="espanol" type="text" placeholder="Escriba el término en español" class="form-control input-md">
 
  </div>
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="col-md-4 control-label" for="txtGnabere">Frase en gnäbere</label>
  <div class="col-md-4">                     
    <textarea class="form-control" id="txtGnabere" name="txtGnabere"></textarea>
  </div>
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="col-md-4 control-label" for="txtEspanol">Frase en español</label>
  <div class="col-md-4">                     
    <textarea class="form-control" id="txtEspanol" name="txtEspanol"></textarea>
  </div>
</div>

<!-- File Button --> 
<div class="form-group">
  <label class="col-md-4 control-label" for="audio">Audio</label>
  <div class="col-md-4">
    <input id="audio" name="audio" class="input-file" type="file">
  </div>
</div>

<!-- File Button --> 
<div class="form-group">
  <label class="col-md-4 control-label" for="imagen">Imagen</label>
  <div class="col-md-4">
    <input id="imagen" name="imagen" class="input-file" type="file">
  </div>
</div>
<br>
<div class="form-group text-center">
  <div class="col-md-4">
    <input id="btnEnviar" class="btn btn-success" type="button" value="Enviar">
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