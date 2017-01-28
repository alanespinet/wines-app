<?php
header("Access-Control-Allow-Origin: *");
require_once('connection.php');

$dbconn = new TDBConn();
$dbobj = $dbconn->getConnectionObject();

$year = $_GET['year'];

$sql=$dbobj->prepare("SELECT * FROM wine WHERE year LIKE :year");
$sql->bindParam(':year', $year, PDO::PARAM_STR, 45);
$sql->execute();

$wine_data = $sql->fetchAll();
$returnedJSON = "[";
$rowCounter = 0;

foreach ($wine_data as $wine) {
  $returnedJSON .= "{";
    $returnedJSON .= '"id":' . '"' . $wine['id'] . '",';
    $returnedJSON .= '"name":' . '"' . $wine['name'] . '",';
    $returnedJSON .= '"year":' . '"' . $wine['year'] . '",';
    $returnedJSON .= '"grapes":' . '"' . $wine['grapes'] . '",';
    $returnedJSON .= '"country":' . '"' . $wine['country'] . '",';
    $returnedJSON .= '"region":' . '"' . $wine['region'] . '",';
    $returnedJSON .= '"description":' . '"' . $wine['description'] . '",';
    $returnedJSON .= '"picture":' . '"' . $wine['picture'] . '"';
  $returnedJSON .= "}";
  if($rowCounter++ < $sql->rowCount() - 1){
    $returnedJSON .= ",";
  }
}

$returnedJSON .= "]";
echo $returnedJSON;
