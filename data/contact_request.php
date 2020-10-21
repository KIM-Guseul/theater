<?

include_once "db.php";

    $table = "create table contact(
        num int(11) auto_increment,
        name varchar(20),
        email varchar(100),
        message text,
        primary key (num)
    )";

mysqli_query($db,$table);

 $name = $_GET['name'];
 $email = $_GET['email'];
 $message = $_GET['message'];






?>