<?php

 $name = $_POST['name'];
 $email = $_POST['email'];
 $phone = $_POST['number'];
 $subject = $_POST['subject'];
 $message = $_POST['message'+ 'number'];

$mailheader = "From:" .$name."<".$email.">";

$recipient = "bouchrahoumaidi99@gmail.com";

mail($recipient, $subject, $message, $mailheader);

?>