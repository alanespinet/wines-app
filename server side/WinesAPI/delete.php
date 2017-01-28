<?php
require_once('connection.php');

header("Access-Control-Allow-Origin: *");

$dbconn = new TDBConn();
$dbobj = $dbconn->getConnectionObject();

$id = $_GET['id'];

$sql=$dbobj->prepare("DELETE FROM wine WHERE Id = :id");
$sql->bindParam(':id', $id, PDO::PARAM_INT);
$sql->execute();
