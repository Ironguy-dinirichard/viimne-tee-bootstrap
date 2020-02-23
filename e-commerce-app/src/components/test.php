
<?php
if(isset($_POST["submit"])) {
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["text"];
}


    $to_email='kaurkaitsa@gmail.com';
    $subject='Contact from Website'; 
    $message="Name: $sender\nEmail Address: $senderEmail\n\nMessage: $message";
    $headers="From: ".$senderEmail;
    
    if(mail($to_email,$subject,$message,$headers)){
            echo "<h1> Hello </h1>";

    }

?>


