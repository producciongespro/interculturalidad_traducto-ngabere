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
 var datos = new FormData(); 
  datos.append("gnabere", $("#gnabere").val() );
  datos.append("espanol", $("#espanol").val() );
  datos.append("txtGnabere", $("#txtGnabere").val() );
  datos.append("txtEspanol", $("#txtEspanol").val() );
  datos.append("audio", $('#audio')[0].files[0] );
  datos.append("imagen", $('#imagen')[0].files[0] );

    //console.log("Tratando de enviar",$('#imagen')[0].files[0]);
    console.log("formData", datos);

  //   fetch('serv/enviar_termino.php', {
  //     method: "POST",
  //     dataType: 'json',
  //     body: datos,
  //     headers: {
  //         // 'Content-Type': '"multipart/form-data;',
  //         // 'Authorization': `Bearer ${token}`
  //     }
  // }).then(response => {
  //     console.log(response)
  // }).catch(error => console.log(error))


  $.ajax({      
    url: 'serv/enviar_termino.php',
    type: 'POST',
    data: datos,
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