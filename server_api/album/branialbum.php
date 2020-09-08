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
	
		 $id_album= $mysqli->real_escape_string($_GET['id_album']);
		 $sql= mysqli_query($mysqli,"SELECT  brano.id_brano, brano.id_album, brano.titolo, brano.durata, brano.valutazione_media, brano.descrizione, brano.testo, brano.youtube,
		 album.id_album, album.id_artista, album.titolo AS titalb, album.genere, album.immagine, artista.nome
		 FROM brano JOIN album ON brano.id_album = album.id_album JOIN artista ON artista.id_artista = album.id_artista WHERE brano.id_album='$id_album'");
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

  
	  

