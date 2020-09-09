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
        
      $query = mysqli_query($mysqli, "INSERT INTO album_preferiti SET
      username = '$postjson[username]',
      id_album = '$postjson[id_album]'
    
    ");
  
    $id = mysqli_insert_id($mysqli);
  
    if($query) $result = json_encode(array('success'=>true, 'id'=>$id));
    else $result = json_encode(array('success'=>false));
  
    echo $result;

  }

  if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {

    $data = array();
   
		$sql = mysqli_query($mysqli, "DELETE FROM album_preferiti WHERE id_album='$id_album'");
		
		
        
        if($sql){
			
		  
            http_response_code(201);

        }
        else{
            http_response_code(500);
		}
		exit (json_encode($data));


  }
	  

