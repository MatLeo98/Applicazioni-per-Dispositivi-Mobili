<?php

header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "../library/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');

/*if($postjson['aksi']=='getartista'){
	$data = array();
	$query = mysqli_query($mysqli, "SELECT * FROM artista");

	while($row = mysqli_fetch_array($query)){

		$data[] = array(
	    'id_artista' => $row['id_artista'],
	  'nome' => $row['nome'],
	  'storia' => $row['storia'],
	  'immart' => $row['immart'],
		);
  }

	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
	else $result = json_encode(array('success'=>false));

    echo $result;
    }*/
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        
      $data = array();
			$query = mysqli_query($mysqli, "SELECT * FROM master_user WHERE username='$postjson[username]'"); 
			
			  while($row = mysqli_fetch_array($query)){
		
				  $data[] = array(
            'user_id' => $data['user_id'],
            'email' => $data['email'],
            'username' => $data['username'],
            'password' => $data['password'],
            'immagine' => $data['immagine'],
            'status' => $data['status']
			  );
			  
			  
			  }
		
			  if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
			  else $result = json_encode(array('success'=>false));
		
			  echo $result;
  }
	  

