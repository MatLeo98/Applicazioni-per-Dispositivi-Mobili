<?php


  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "../library/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');


  if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    

  $data = array();
		
  
    $username= $mysqli->real_escape_string($_GET['username']);
    $id = $_GET['id'];
			 $sql= mysqli_query($mysqli,"DELETE FROM album_preferiti WHERE id_album='$id' AND username='$username'");
			 if($sql){
				$result = 'preferito eliminato';
				 http_response_code(200);
	 
			 }
			 else{
         $result = 'errore';
				 http_response_code(500);
       }
      
      
			
       exit(json_encode($result));

    }
	  

