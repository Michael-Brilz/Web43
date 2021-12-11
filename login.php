<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web43</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<html>

<body>
  <!--Navigation section -->
  <div>
    <header>
      <nav>
        <div class="logo"></div>
        <ul id="navi">
          <li><a class="hover" href="index.html">Startseite</a></li>
          <li><a class="hover" href="speisekarte.html">Speisekarte</a></li>
          <li><a class="hover" href="bestellen.php">Bestellen</a></li>

        </ul>
      </nav>
    </header>
  </div>
  <!--Navigation section ende -->

  <!--Social Meida section -->
  <div class="icon-bar">
    <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
    <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
    <a href="#" class="google"><i class="fa fa-google"></i></a>
    <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
  </div>
  <!--Social Meida section ende -->
  <!--Login Bereich -->
  <div class="container login-container">
    <div class="row">
      <div class="col">
      </div>
      <div class="col-8 login-form">
        <?php
        if (isset($_POST["submit"])) {
          require("mysql.php");
          $stmt = $mysql->prepare("SELECT * FROM accounts WHERE USERNAME = :user"); //Username überprüfen
          $stmt->bindParam(":user", $_POST["username"]);
          $stmt->execute();
          $count = $stmt->rowCount();
          if ($count == 1) {
            //Username ist frei
            $row = $stmt->fetch();
            if (password_verify($_POST["pw"], $row["PASSWORD"])) {
              session_start();
              $_SESSION["username"] = $row["USERNAME"];
              header("Location: bestellen.php");
            } else {
              echo "Der Login ist fehlgeschlagen";
            }
          } else {
            echo "Der Login ist fehlgeschlagen";
          }
        }
        ?>
        <h1>Anmelden</h1>
        <form action="login.php" method="post">
          <input class="inputfield" type="text" name="username" placeholder="Username" required><br>
          <input class="inputfield" type="password" name="pw" placeholder="Passwort" required><br>
          <button type="submit" name="submit">Einloggen</button>
        </form>
      </div>
      <div class="col">
      </div>
    </div>
    <!--Login Bereich ende -->
</body>

</html>