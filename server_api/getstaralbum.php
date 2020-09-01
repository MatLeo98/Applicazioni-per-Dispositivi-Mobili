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
      $query = mysqli_query($mysqli, "SELECT * FROM album_preferiti WHERE id_album='$postjson[id_album]' AND username='$postjson[username]'");
    
      while($row = mysqli_fetch_array($query)){
    
        $data[] = array(
        'id_album' => $row['id_album'],
        'username' => $row['username']
        
    
        );
      }
    
      if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
      else $result = json_encode(array('success'=>false));
    
      echo $result;
}

  
	  

