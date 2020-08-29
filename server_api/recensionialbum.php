<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        
        $data = array();
        $query = mysqli_query($mysqli, "SELECT * FROM recensione_album WHERE id_album='$postjson[album_id]'");

	while($row = mysqli_fetch_array($query)){

		$data[] = array(
            'id' => $row['id'],
            'titolo' => $row['titolo'],
            'testo' => $row['testo'],
            'valutazione' => $row['valutazione'],
            'username' => $row['username'],
            'id_album' => $row['id_album'],

		);
	}

	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
	else $result = json_encode(array('success'=>false));

	echo $result;

  }
	  

