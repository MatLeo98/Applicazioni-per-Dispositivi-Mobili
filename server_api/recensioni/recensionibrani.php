<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "../library/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        
        $data = array();
        $query = mysqli_query($mysqli, "SELECT * FROM recensione_brano WHERE id_brano='$postjson[id_brano]'");

	while($row = mysqli_fetch_array($query)){

		$data[] = array(
        'id' => $row['id'],
			'username' => $row['username'],
			'id_brano' => $row['id_brano'],
			'titolo' => $row['titolo'],
			'valutazione' => $row['valutazione'],
			'testo' => $row['testo']

		);
	}

	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
	else $result = json_encode(array('success'=>false));

	echo $result;

  }
	  

