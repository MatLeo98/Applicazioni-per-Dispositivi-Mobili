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
        
      $query = mysqli_query($mysqli, "DELETE FROM album_preferiti WHERE username='$postjson[username]' AND id_album='$postjson[id_album]'");

	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
	else $result = json_encode(array('success'=>false, 'result'=>'error'));

	echo $result;

  }

 
	  

