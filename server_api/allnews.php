<?php

header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";


  if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $data = array();
    $sql = mysqli_query($mysqli, "SELECT * FROM notizia");
    
    if($sql){
        
        while($row = mysqli_fetch_array($sql)){
            
            $data[] = array(
                'id_notizia' => $row['id_notizia'],
          'titolo' => $row['titolo'],
          'descrizione' => $row['descrizione'],
          'link' => $row['link'],
          'immnews' => $row['immnews'],
            );
      }
        http_response_code(201);

    }
    else{
        http_response_code(500);
    }

    exit (json_encode($data));
  }