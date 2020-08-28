<?php

header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";

  if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $data = array();
	$sql = mysqli_query($mysqli, "SELECT *  FROM artisti_preferiti, artista WHERE artista.id_artista = artisti_preferiti.id_artista AND username='$postjson[username]'");

	while($row = mysqli_fetch_array($sql)){

		$data[] = array(
	  'id_artista' => $row['id_artista'],
	  'username' => $row['username'],
	  'nome' => $row['nome'],
	  'storia' => $row['storia'],
	  'immart' => $row['immart']

		);
    }


    if($sql) $result = json_encode(array('success'=>true, 'result'=>$data));
	else $result = json_encode(array('success'=>false));

	echo $result;

}

