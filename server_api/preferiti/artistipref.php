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
        $username= $mysqli->real_escape_string($_GET['username']);
        $data = array();
	$sql = mysqli_query($mysqli, "SELECT *  FROM artisti_preferiti, artista WHERE artista.id_artista = artisti_preferiti.id_artista AND username='$username'");

	if($sql){

		while ($d = $sql->fetch_assoc()){
			$data[]=$d;}

		while($row = mysqli_fetch_array($sql)){

		$data[] = array(
	  'id_artista' => $row['id_artista'],
	  'username' => $row['username'],
	  'nome' => $row['nome'],
	  'storia' => $row['storia'],
	  'immart' => $row['immart']

		);
	}

	http_response_code(201);

        }
        else{
            http_response_code(500);
		}
	
		exit (json_encode($data));
	}
	  