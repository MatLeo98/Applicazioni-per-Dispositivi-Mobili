<?php

header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "../library/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    	$data = array();
		if(isset($_GET['event'])){
			$event= $mysqli->real_escape_string($_GET['event']);
			$result = $event;
			$sql= mysqli_query($mysqli, "SELECT * FROM artista WHERE nome LIKE '%$event%'");
			if($sql){
				
				while ($d = $sql->fetch_assoc()){
					$data[]=$d;
				}
				http_response_code(201);
	
			}
			else{
				
				http_response_code(500);
			}
		   
		   }else{

			$data = array();
			$sql = mysqli_query($mysqli, "SELECT * FROM artista");
			//$sql= $conn->query("SELECT * FROM artista;");
        
        if($sql){
            while ($d = $sql->fetch_assoc()){
                $data[]=$d;
			}
			while($row = mysqli_fetch_array($sql)){

				$data[] = array(
				'id_artista' => $row['id_artista'],
			  'nome' => $row['nome'],
			  'storia' => $row['storia'],
			  'immart' => $row['immart'],
				);
		  }
            http_response_code(201);

        }
        else{
            http_response_code(500);
        }

	  }

	  exit (json_encode($data));

	
	}