<?php


//externo
/*
    $servidor = "localhost";
    $usuario = "496606";
    $senha = "bvadvocacia";
    $dbname = "496606";
*/
//local
    $servidor = "localhost";
    $usuario = "root";
    $senha = "";
    $dbname = "bvadv";

//Criar a conexao

$conn = mysqli_connect($servidor, $usuario, $senha, $dbname);

if (!$conn) {
    die("Falha na conexao: " . mysqli_connect_error());
} else {
    //echo "Conexao realizada com sucesso";
}
