<?php

class TDBConn {
      private $host;
      private $db;
      private $user;
      private $pass;

      private $conn;

      public function __construct(){
        $this->host = "localhost";
        $this->db = "wines_app";
        $this->user = "wines_su";
        $this->pass = "123456";

        $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db, $this->user, $this->pass);
      }

      public function getConnectionObject(){
        return $this->conn;
      }

      public function getServer(){
        return $this->host;
      }
}
