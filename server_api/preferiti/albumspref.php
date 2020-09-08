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
        $username= $mysqli->real_escape_string($_GET['username']);
        $data = array();
        $sql = mysqli_query($mysqli, "SELECT album_preferiti.username, album.id_album, album.titolo, album.anno, album.genere, album.immagine, album.valutazione_media, album.descrizione, artista.id_artista, artista.nome FROM album_preferiti, album, artista WHERE album.id_album = album_preferiti.id_album  AND album.id_artista = artista.id_artista AND album_preferiti.username='$username'");

        if($sql){

          while ($d = $sql->fetch_assoc()){
            $data[]=$d;}

	        while($row = mysqli_fetch_array($sql)){

		$data[] = array(
            'username' => $row['username'],
            'id_album' => $row['id_album'],
            'id_artista' => $row['id_artista'],
            'titolo' => $row['titolo'],
            'anno' => $row['anno'],
            'genere' => $row['genere'],
            'immagine' => $row['immagine'],
            'valutazione_media' => $row['valutazione_media'],
            'descrizione' => $row['descrizione'],
            'nome' => $row['nome']

		);
	}

	http_response_code(201);

        }
        else{
            http_response_code(500);
		}
	
		exit (json_encode($data));
	}
