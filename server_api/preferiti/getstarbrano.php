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
	$query = mysqli_query($mysqli, "SELECT * FROM brani_preferiti WHERE id_brano='$postjson[id_brano]' AND username='$postjson[username]'");

	while($row = mysqli_fetch_array($query)){

		$data[] = array(
		'id_brano' => $row['id_brano'],
		'username' => $row['username']
	  

		);
	}

	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
	else $result = json_encode(array('success'=>false));

	echo $result;
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

	$data = array();
	
     $id_brano= $mysqli->real_escape_string($_GET['id_brano']);
     $username= $mysqli->real_escape_string($_GET['username']);

		 $sql= mysqli_query($mysqli,"SELECT * FROM brani_preferiti WHERE id_brano='$id_brano' AND username='$username'");
		 if($sql){
			 while ($d = $sql->fetch_assoc()){
				 $data[]=$d;
			 }
			 http_response_code(201);
 
		 }
		 else{
			 http_response_code(500);
		 }
		
		
	exit (json_encode($data));
}

  
	  

