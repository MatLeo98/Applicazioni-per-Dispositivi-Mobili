<?php
include_once '../config/headers.php';
include_once '../config/database.php';
include_once '../../vendor/autoload.php';

//use \Firebase\JWT\JWT;

include_once 'config/headers.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
   // echo 'Get';
   $data = array();
   
        
        $sql= $conn->query("SELECT * FROM artista");
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
