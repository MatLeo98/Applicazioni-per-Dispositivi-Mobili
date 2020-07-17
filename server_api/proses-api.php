<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');


  if($postjson['aksi']=='add'){

  	$query = mysqli_query($mysqli, "INSERT INTO master_customer SET
  		name_customer = '$postjson[name_customer]',
  		desc_customer = '$postjson[desc_customer]',
  		created_at	  = '$today' 
  	");

  	$idcust = mysqli_insert_id($mysqli);

  	if($query) $result = json_encode(array('success'=>true, 'customerid'=>$idcust));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }

  elseif($postjson['aksi']=='addreview'){
  	$query = mysqli_query($mysqli, "INSERT INTO recensione_album SET
  		titolo = '$postjson[titolo]',
      testo	  = '$postjson[testo]',
  		valutazione = '$postjson[valutazione]',
		username = '$postjson[username]',
      id_album = '$postjson[id_album]'
      
      
  	");

  	$idalbum = mysqli_insert_id($mysqli);

  	if($query) $result = json_encode(array('success'=>true, 'albumid'=>$idalbum));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }

  elseif($postjson['aksi']=='addReviewBrano'){
	$query = mysqli_query($mysqli, "INSERT INTO recensione_brano SET

		username = '$postjson[username]',
		id_brano = '$postjson[id_brano]',
		titolo = '$postjson[titolo]',
		valutazione = '$postjson[valutazione]',
		testo	  = '$postjson[testo]'
	
	");

	$idbrano = mysqli_insert_id($mysqli);

	if($query) $result = json_encode(array('success'=>true, 'branoid'=>$idbrano));
	else $result = json_encode(array('success'=>false));

	echo $result;

}

  elseif($postjson['aksi']=='addAlbumPref'){
	$query = mysqli_query($mysqli, "INSERT INTO album_preferiti SET
		username = '$postjson[username]',
		id_album = '$postjson[id_album]'
	
	");

	$id = mysqli_insert_id($mysqli);

	if($query) $result = json_encode(array('success'=>true, 'id'=>$id));
	else $result = json_encode(array('success'=>false));

	echo $result;

}

elseif($postjson['aksi']=='addArtistaPref'){
	$query = mysqli_query($mysqli, "INSERT INTO artisti_preferiti SET
		username = '$postjson[username]',
		id_artista = '$postjson[id_artista]'
	
	");

	$id = mysqli_insert_id($mysqli);

	if($query) $result = json_encode(array('success'=>true, 'id'=>$id));
	else $result = json_encode(array('success'=>false));

	echo $result;

}

elseif($postjson['aksi']=='addBranoPref'){
	$query = mysqli_query($mysqli, "INSERT INTO brani_preferiti SET
		username = '$postjson[username]',
		id_brano = '$postjson[id_brano]'
	
	");

	$id = mysqli_insert_id($mysqli);

	if($query) $result = json_encode(array('success'=>true, 'id'=>$id));
	else $result = json_encode(array('success'=>false));

	echo $result;

}

  elseif($postjson['aksi']=='getdata'){
  	$data = array();
  	$query = mysqli_query($mysqli, "SELECT * FROM master_customer ORDER BY customer_id DESC LIMIT $postjson[start],$postjson[limit]");

  	while($row = mysqli_fetch_array($query)){

  		$data[] = array(
  			'customer_id' => $row['customer_id'],
  			'name_customer' => $row['name_customer'],
  			'desc_customer' => $row['desc_customer'],
  			'created_at' => $row['created_at'],

  		);
  	}

  	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }

  elseif($postjson['aksi']=='getalbum'){
  	$data = array();
  	$query = mysqli_query($mysqli, "SELECT * FROM album JOIN artista ON album.id_artista = artista.id_artista");

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

  elseif($postjson['aksi']=='getalbumartista'){
	$data = array();
	$query = mysqli_query($mysqli, "SELECT * FROM album JOIN artista ON album.id_artista = artista.id_artista WHERE album.id_artista='$postjson[artista_id]'");

	while($row = mysqli_fetch_array($query)){

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

	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
	else $result = json_encode(array('success'=>false));

	echo $result;

}

elseif($postjson['aksi']=='getbrano'){
    $data = array();
    $query = mysqli_query($mysqli, "SELECT  brano.id_brano, brano.id_album, brano.titolo, brano.durata, brano.valutazione_media, brano.descrizione, brano.testo, brano.youtube,
    album.id_album, album.id_artista, album.titolo AS titalb, album.genere, album.immagine, artista.nome
    FROM brano JOIN album ON brano.id_album = album.id_album JOIN artista ON artista.id_artista = album.id_artista");

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

  elseif($postjson['aksi']=='getbranialbum'){
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

  elseif($postjson['aksi']=='getnews'){
	$data = array();
	$query = mysqli_query($mysqli, "SELECT * FROM notizia");

	while($row = mysqli_fetch_array($query)){

		$data[] = array(
			'id_notizia' => $row['id_notizia'],
	  'titolo' => $row['titolo'],
	  'descrizione' => $row['descrizione'],
	  'link' => $row['link'],
	  'immnews' => $row['immnews'],
		);
  }

	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
	else $result = json_encode(array('success'=>false));

	echo $result;

}

  elseif($postjson['aksi']=='getAlbumPref'){
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

elseif($postjson['aksi']=='getArtistaPref'){
	$data = array();
	$query = mysqli_query($mysqli, "SELECT * FROM artisti_preferiti WHERE id_artista='$postjson[id_artista]' AND username='$postjson[username]'");

	while($row = mysqli_fetch_array($query)){

		$data[] = array(
		'id_artista' => $row['id_artista'],
		'username' => $row['username']
	  

		);
	}

	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
	else $result = json_encode(array('success'=>false));

	echo $result;

}

elseif($postjson['aksi']=='getBranoPref'){
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

  elseif($postjson['aksi']=='searchartisti'){
  	$data = array();
    $query = mysqli_query($mysqli, "SELECT * FROM artista WHERE nome LIKE '%$postjson[event]%'"); //SELECT * FROM album WHERE titolo LIKE '%$postjson[event]%' 
    
  	while($row = mysqli_fetch_array($query)){

  		$data[] = array(
  			'id_artista' => $row['id_artista'],
  			'nome' => $row['nome'],
  			'immart' => $row['immart'],
        	'storia' => $row['storia'],

      );
      
      
  	}

  	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }


  elseif($postjson['aksi']=='searchalbum'){
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

  elseif($postjson['aksi']=='searchbrani'){
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

  elseif($postjson['aksi']=='getreviews'){
  	$data = array();
  	$query = mysqli_query($mysqli, "SELECT * FROM recensione_album WHERE id_album='$postjson[album_id]'");

  	while($row = mysqli_fetch_array($query)){

  		$data[] = array(
  			'id' => $row['id'],
        'titolo' => $row['titolo'],
        'testo' => $row['testo'],
  			'valutazione' => $row['valutazione'],
        'username' => $row['username'],
        'id_album' => $row['id_album'],

  		);
  	}

  	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }

  elseif($postjson['aksi']=='getReviewsBrani'){
	$data = array();
	$query = mysqli_query($mysqli, "SELECT * FROM recensione_brano WHERE id_brano='$postjson[id_brano]'");

	while($row = mysqli_fetch_array($query)){

		$data[] = array(

			'id' => $row['id'],
			'username' => $row['username'],
			'id_brano' => $row['id_brano'],
			'titolo' => $row['titolo'],
			'valutazione' => $row['valutazione'],
			'testo' => $row['testo']

		);
	}

	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
	else $result = json_encode(array('success'=>false));

	echo $result;

}

  elseif($postjson['aksi']=='getartista'){
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

}

  elseif($postjson['aksi']=='getArtistiPref'){
	$data = array();
	$query = mysqli_query($mysqli, "SELECT *  FROM artisti_preferiti, artista WHERE artista.id_artista = artisti_preferiti.id_artista AND username='$postjson[username]'");

	while($row = mysqli_fetch_array($query)){

		$data[] = array(
	  'id_artista' => $row['id_artista'],
	  'username' => $row['username'],
	  'nome' => $row['nome'],
	  'storia' => $row['storia'],
	  'immart' => $row['immart']

		);
	}

	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
	else $result = json_encode(array('success'=>false));

	echo $result;

}

elseif($postjson['aksi']=='getAlbumsPref'){
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

elseif($postjson['aksi']=='getBraniPref'){
	$data = array();
	$query = mysqli_query($mysqli, "SELECT brani_preferiti.username, brano.id_brano, brano.id_album, brano.titolo, brano.durata, brano.valutazione_media, brano.descrizione, brano.testo, artista.nome FROM brani_preferiti, brano, album, artista WHERE brano.id_brano = brani_preferiti.id_brano AND album.id_album = brano.id_album AND album.id_artista = artista.id_artista AND username='$postjson[username]'");

	while($row = mysqli_fetch_array($query)){

		$data[] = array(
		'username' => $row['username'],
	  'id_brano' => $row['id_brano'],
	  'id_album' => $row['id_album'],
	  'titolo' => $row['titolo'],
	  'durata' => $row['durata'],
	  'valutazione_media' => $row['valutazione_media'],
	  'descrizione' => $row['descrizione'],
	  'testo' => $row['testo'],
	  'nome' => $row['nome']

		);
	}

	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
	else $result = json_encode(array('success'=>false));

	echo $result;

}

  elseif($postjson['aksi']=='update'){
  	$query = mysqli_query($mysqli, "UPDATE master_customer SET 
  		name_customer='$postjson[name_customer]',
  		desc_customer='$postjson[desc_customer]' WHERE customer_id='$postjson[customer_id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }

  elseif($postjson['aksi']=='delete'){
  	$query = mysqli_query($mysqli, "DELETE FROM master_customer WHERE customer_id='$postjson[customer_id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }

  elseif($postjson['aksi']=='delAlbumPref'){
	$query = mysqli_query($mysqli, "DELETE FROM album_preferiti WHERE username='$postjson[username]' AND id_album='$postjson[id_album]'");

	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
	else $result = json_encode(array('success'=>false, 'result'=>'error'));

	echo $result;

}

	elseif($postjson['aksi']=='delArtistaPref'){
		$query = mysqli_query($mysqli, "DELETE FROM artisti_preferiti WHERE username='$postjson[username]' AND id_artista='$postjson[id_artista]'");

		if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
		else $result = json_encode(array('success'=>false, 'result'=>'error'));

		echo $result;
	}

	elseif($postjson['aksi']=='delBranoPref'){
		$query = mysqli_query($mysqli, "DELETE FROM brani_preferiti WHERE username='$postjson[username]' AND id_brano='$postjson[id_brano]'");

		if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
		else $result = json_encode(array('success'=>false, 'result'=>'error'));

		echo $result;
	}


  elseif($postjson['aksi']=="login"){
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "SELECT * FROM master_user WHERE username='$postjson[username]' AND password='$password'");
    $check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'user_id' => $data['user_id'],
        'username' => $data['username'],
        'password' => $data['password']
      );

      if($data['status']=='y'){
        $result = json_encode(array('success'=>true, 'result'=>$datauser));
      }else{
        $result = json_encode(array('success'=>false, 'msg'=>'Account Inactive')); 
      }

    }else{
      $result = json_encode(array('success'=>false, 'msg'=>'Unregister Account'));
    }

    echo $result;
  }

  elseif($postjson['aksi']=="register"){
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "INSERT INTO master_user SET
	  email = '$postjson[email]',
      username = '$postjson[username]',
      password = '$password',
      status   = 'y'
    ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
  }


?>