<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$mail = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $fname . " + " . $lname . "\r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'julianvivasestrada@gmail.com';
$asunto = 'Mensaje de... (Escribe como quieres que se vea el remitente de tu correo)';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>