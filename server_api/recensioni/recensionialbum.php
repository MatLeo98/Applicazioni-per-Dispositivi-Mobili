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
        $album_id= $mysqli->real_escape_string($_GET['id']);
        $data = array();
        $sql = mysqli_query($mysqli, "SELECT * FROM recensione_album WHERE id_album = '$album_id'");

    if($sql){

      while ($d = $sql->fetch_assoc()){
        $data[]=$d;}
          
          while($row = mysqli_fetch_array($sql)){

		$data[] = array(
            'id' => $row['id'],
            'titolo' => $row['titolo'],
            'testo' => $row['testo'],
            'valutazione' => $row['valutazione'],
            'username' => $row['username'],
            'id_album' => $row['id_album'],

		);
	}

	http_response_code(201);

        }
        else{
            http_response_code(500);
		}
	
		exit (json_encode($data));
	}
	  

