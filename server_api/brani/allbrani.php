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
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    	$data = array();
   
		$sql = mysqli_query($mysqli, "SELECT  brano.id_brano, brano.id_album, brano.titolo, brano.durata, brano.valutazione_media, brano.descrizione, brano.testo, brano.youtube,
		album.id_album, album.id_artista, album.titolo AS titalb, album.genere, album.immagine, artista.nome
		FROM brano JOIN album ON brano.id_album = album.id_album JOIN artista ON artista.id_artista = album.id_artista");
		//$sql= $conn->query("SELECT * FROM artista;");
		
		
        
        if($sql){
            /*while ($d = $sql->fetch_assoc()){
                $data[]=$d;
			}*/
			while($row = mysqli_fetch_array($sql)){

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
            http_response_code(201);

        }
        else{
            http_response_code(500);
        }

        exit (json_encode($data));
	  }
	  
	  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	  
		$data = array();
		$query = mysqli_query($mysqli, "SELECT  brano.id_brano, brano.id_album, brano.titolo, brano.durata, brano.valutazione_media, brano.descrizione, brano.testo, brano.youtube,
		album.id_album, album.id_artista, album.titolo AS titalb, album.genere, album.immagine, artista.nome
		FROM brano JOIN album ON brano.id_album = album.id_album JOIN artista ON artista.id_artista = album.id_artista WHERE brano.titolo LIKE '%$postjson[event]%'"); //SELECT * FROM album WHERE titolo LIKE '%$postjson[event]%' 
		
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

