$(document).ready(function () {
    $("#btnEnviar").click(function (e) { 
        e.preventDefault();
        handleEnviar();
       
    });
});


function validarArchivos( ) {
  let lleno=false
  if ( typeof ($('#audio')[0].files[0]) == 'object' &&  typeof($('#imagen')[0].files[0] ) == 'object'  ) {
    lleno=true
  } 
  return lleno
}

function validarTextos () {
  let lleno=false
  if ($("#gnabere").val() &&  $("#espanol").val() &&   $("#txtGnabere").val() && $("#txtEspanol").val() ) {
    lleno=true    
  } 
  return lleno
}


function ajaxServer() {
  var formData = new FormData();
  formData.append("gnabere", $("#gnabere").val() );
  formData.append("espanol", $("#espanol").val() );
  formData.append("txtGnabere", $("#txtGnabere").val() );
  formData.append("txtEspanol", $("#txtEspanol").val() );
  formData.append("audio", $('#audio')[0].files[0] );
  formData.append("imagen", $('#imagen')[0].files[0] );

    //console.log("Tratando de enviar",$('#imagen')[0].files[0]);
    console.log("formData", formData);

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

    $("#btnEnviar").val("Enviando datos...");
    $("#btnEnviar").attr("disabled", true);

    $(".div-shadow").removeClass("invisible");
    }, success: function(response){
      console.log("Enviado");
      $("#btnEnviar").val("Enviar");
      $("#btnEnviar").attr("disabled", false);
      $(".div-shadow").addClass("invisible");
        //Respuesta desde el servidor:
        alert(response.msj)
        $('#frmTermino')[0].reset();     

    }, error: function(response){
      console.log("Error al enviar");
        console.log(response.error);
        console.log(response.msj);
        $(".div-shadow").addClass("invisible");
        $("#btnEnviar").val("Enviar");
        $("#btnEnviar").attr("disabled", false);
    }
  });
}

function handleEnviar() {
    console.log(validarTextos() )
    if (validarTextos() && validarArchivos()  ) {
      ajaxServer()
    } else {
      alert ("Debe completar todos los campos")
    }
    

  
  
}