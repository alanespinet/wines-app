<?php
require_once('connection.php');

header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// receiving data from AngularJS (its different, not common $_POST['element'])
$post_data = file_get_contents('php://input');
$request = json_decode($post_data);

$dbconn = new TDBConn();
$dbobj = $dbconn->getConnectionObject();

$name = $request->name;
$year = $request->year;
$grapes = $request->grapes;
$country = $request->country;
$region = $request->region;
$description = $request->description;
$picture = $request->picture;


$sql=$dbobj->prepare("INSERT INTO wine(name, year, grapes, country, region, description, picture) VALUES(:name, :year, :grapes, :country, :region, :description, :picture)");
$sql->bindParam(':name', $name, PDO::PARAM_STR, 45);
$sql->bindParam(':year', $year, PDO::PARAM_STR, 45);
$sql->bindParam(':grapes', $grapes, PDO::PARAM_STR, 45);
$sql->bindParam(':country', $country, PDO::PARAM_STR, 45);
$sql->bindParam(':region', $region, PDO::PARAM_STR, 45);
$sql->bindParam(':description', $description, PDO::PARAM_LOB);
$sql->bindParam(':picture', $picture, PDO::PARAM_STR, 256);

$sql->execute();
