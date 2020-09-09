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

	$data = array();
	
		 $id_artista= $mysqli->real_escape_string($_GET['id_artista']);
		 $sql= mysqli_query($mysqli,"SELECT * FROM album JOIN artista ON album.id_artista = artista.id_artista WHERE album.id_artista='$id_artista'");
		 if($sql){
			while($row = mysqli_fetch_array($sql)){

				$data[] = array(
			  'id_album' => $row['id_album'],
			  'id_artista' => $row['id_artista'],
			  'titolo' => $row['titolo'],
			  'anno' => $row['anno'],
			  'genere' => $row['genere'],
			  'valutazione_media' => $row['valutazione_media'],
			  'descrizione' => $row['descrizione'],
			  'nome' => $row['nome'],
			  'immagine' => $row['immagine'],
		
				);
		  }
			 http_response_code(201);
 
		 }
		 else{
			 http_response_code(500);
		 }
		
		
	exit (json_encode($data));
}

  
	  

