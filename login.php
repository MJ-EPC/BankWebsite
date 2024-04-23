<?php
    $servername='localhost';
    $username='root';
    $password='';
    $dbname = "db1";
    $conn=mysqli_connect($servername,$username,$password,"$dbname");

    /*
    $sql = "SELECT UserID, Vorname, Nachname, Passwort FROM user";
    $result = $conn->query($sql);
  if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "UserID: " . $row["UserID"]. " - Vorname: " . $row["Vorname"]. " - Nachname: " . $row["Nachname"]. " - Passwort: " .$row["Passwort"] . "<br>";
  }
} else {
  echo "0 results";
}*/

$id_input = $_POST['id'];
$passwort_input = $_POST['passwort'];

$result = mysqli_query($conn, "SELECT * from user");
$row = mysqli_fetch_assoc($result);
$id_db = $row['UserID'];
$passwort_db = $row['Passwort'];

echo("ID: " . $id_db);
echo("<br>");
echo("Passwort: " . $passwort_db);
echo("<br>");

if($id_input==$id_db && $passwort_input==$passwort_db) {
  echo("Erfolgreiche Anmeldung"."<br>");
  header("Location: .login.php");
  $conn->close();
  die();
}
else{
  echo("Fehler");
}
?>
