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
		$query = mysqli_query($mysqli, "SELECT  brano.id_brano, brano.id_album, brano.titolo, brano.durata, brano.valutazione_media, brano.descrizione, brano.testo, brano.youtube,
		album.id_album, album.id_artista, album.titolo AS titalb, album.genere, album.immagine, artista.nome
		FROM brano JOIN album ON brano.id_album = album.id_album JOIN artista ON artista.id_artista = album.id_artista WHERE brano.id_album='$postjson[album_id]'");
	
		while($row = mysqli_fetch_array($query)){
	
		  $data[] = array(
			'id_brano' => $row['id_brano'],
			'id_album' => $row['id_album'],
			'titolo' => $row['titolo'],
			'durata' => $row['durata'],
			'valutazione_media' => $row['valutazione_media'],
			'descrizione' => $row['descrizione'],
			'testo' => $row['testo'],
			'youtube' => $row['youtube'],
			'genere' => $row['genere'],
			'titalb' => $row['titalb'],
			'nome' => $row['nome'],
			'immagine' => $row['immagine'],
		  );
		}
	
		if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
		  else $result = json_encode(array('success'=>false));
	
		echo $result;
}

  
	  

