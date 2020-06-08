$(document).ready(function () {
    $("#btnEnviar").click(function (e) { 
        e.preventDefault();
        enviar();
    });
});

function enviar() {
    var formData = new FormData();
    formData.append("gnabere", $("#gnabere").val());
    formData.append("espanol", $("#espanol").val());
    formData.append("txtGnabere", $("#txtGnabere").val());
    formData.append("txtEspanol", $("#txtEspanol").val());
    formData.append("audio", $('#audio')[0].files[0]);
    formData.append("imagen", $('#imagen')[0].files[0]);
  console.log("Tratando de enviar",$('#imagen')[0].files[0]);
  console.log(formData);
   
    $.ajax({      
      url: '../enviar_termino.php',
      type: 'POST',
      data: formData,
      dataType: 'json',
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: function(){
      console.log("En proceso");
      $(".div-shadow").removeClass("invisible");
      }, success: function(response){
        console.log("Enviado");
        $(".div-shadow").addClass("invisible");
        console.log(response.msj);
        // function (response);
  
      }, error: function(response){
        console.log("Error al enviar");
          console.log(response.error);
          console.log(response.msj);
          $(".div-shadow").addClass("invisible");
      }
    }); 
}