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
		if(isset($_GET['event'])){
			 $event= $mysqli->real_escape_string($_GET['event']);
			 $sql= mysqli_query($mysqli,"SELECT * FROM album JOIN artista ON album.id_artista = artista.id_artista WHERE titolo LIKE '%$event%'");
			 if($sql){
				 while ($d = $sql->fetch_assoc()){
					 $data[]=$d;
				 }
				 http_response_code(201);
	 
			 }
			 else{
				 http_response_code(500);
			 }
			
			}else{
    	$data = array();
   
		$sql = mysqli_query($mysqli, "SELECT * FROM album JOIN artista ON album.id_artista = artista.id_artista");
		
		
		
        
        if($sql){
            while ($d = $sql->fetch_assoc()){
                $data[]=$d;
			}
			while($row = mysqli_fetch_array($sql)){

				$data[] = array(
					'id_album' => $row['id_album'],
					'id_artista' => $row['id_artista'],
					'titolo' => $row['titolo'],
					'anno' => $row['anno'],
					'genere' => $row['genere'],
					'immagine' => $row['immagine'],
					'valutazione_media' => $row['valutazione_media'],
					'descrizione' => $row['descrizione'],
					'nome' => $row['nome'],
				);
		  }
            http_response_code(201);

        }
        else{
            http_response_code(500);
		}
	}
		exit (json_encode($data));
	}
		
		if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	  
			$data = array();
			$query = mysqli_query($mysqli, "SELECT * FROM album JOIN artista ON album.id_artista = artista.id_artista WHERE titolo LIKE '%$postjson[event]%'"); //SELECT * FROM album WHERE titolo LIKE '%$postjson[event]%' 
			
			  while($row = mysqli_fetch_array($query)){
		
				  $data[] = array(
					'id_album' => $row['id_album'],
					'id_artista' => $row['id_artista'],
					'titolo' => $row['titolo'],
					'anno' => $row['anno'],
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
	  

       

