<?php
  require 'config.php';

  $id  = $_POST["id"];
  $location = $_POST["location"];
  $reason = $_POST["reason"];
 
  $sql = "UPDATE $dbname.$usertable SET reason = '$reason',location = '$location' WHERE $usertable.id = '$id'";

  $result = $conn->query($sql);

  $query = "SELECT * FROM $usertable";
  $result = $conn->query($query);

  if($result){
    while($row=$result -> fetch_assoc()){
       $json[] = $row;
    }
    $data['data'] = $json;
    echo json_encode($data);
  }

  mysqli_close($conn);
?>