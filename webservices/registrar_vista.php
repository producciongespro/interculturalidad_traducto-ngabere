        <?php
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Content-Type: text/html; charset=utf-8");
        $method = $_SERVER['REQUEST_METHOD'];
        $JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);
              include "conectar.php";
                $mysqli = conectarDB();
                $idTermino = ($dataObject-> id);
                $consulta = "UPDATE `terminos` SET `views`= `views` + 1 WHERE `id` = $idTermino";
                mysqli_query($mysqli,$consulta);
        ?>
