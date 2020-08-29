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
        $query = mysqli_query($mysqli, "SELECT album_preferiti.username, album.id_album, album.titolo, album.genere, album.immagine, album.valutazione_media, album.descrizione, artista.nome FROM album_preferiti, album, artista WHERE album.id_album = album_preferiti.id_album  AND album.id_artista = artista.id_artista AND album_preferiti.username='$postjson[username]'");

	while($row = mysqli_fetch_array($query)){

		$data[] = array(
            'username' => $row['username'],
            'id_album' => $row['id_album'],
            'titolo' => $row['titolo'],
            'genere' => $row['genere'],
            'immagine' => $row['immagine'],
            'valutazione_media' => $row['valutazione_media'],
            'descrizione' => $row['descrizione'],
            'nome' => $row['nome'],

		);
	}

	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
	else $result = json_encode(array('success'=>false));

	echo $result;

  }
	  

