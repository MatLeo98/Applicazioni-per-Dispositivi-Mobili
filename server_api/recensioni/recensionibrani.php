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
        $id_brano = $mysqli->real_escape_string($_GET['id_brano']);
        $data = array();
        $sql = mysqli_query($mysqli, "SELECT * FROM recensione_brano, master_user WHERE id_brano = '$id_brano' AND recensione_brano.username = master_user.username");

  if($sql){

    while ($d = $sql->fetch_assoc()){
      $data[]=$d;}

	while($row = mysqli_fetch_array($sql)){

		$data[] = array(
        'id' => $row['id'],
			'username' => $row['username'],
			'id_brano' => $row['id_brano'],
			'titolo' => $row['titolo'],
			'valutazione' => $row['valutazione'],
      'testo' => $row['testo'],
      'immagine' => $row['immagine']

		);
	}

  http_response_code(201);

}
else{
    http_response_code(500);
}

exit (json_encode($data));
}
