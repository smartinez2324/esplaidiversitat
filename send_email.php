<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "martineznayeli312@gmail.com";  // 🔹 Reemplaza con tu correo
    $subject = "Nou Missatge del Formulari de Contacte";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Has rebut un missatge nou del formulari:\n\n";
    $body .= "Nom: $name\n";
    $body .= "Correu Electrònic: $email\n";
    $body .= "Telèfon: $phone\n";
    $body .= "Missatge:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "El missatge s'ha enviat correctament.";
    } else {
        echo "Error en enviar el missatge. Torna-ho a provar.";
    }
} else {
    echo "Accés no permès.";
}
?>
