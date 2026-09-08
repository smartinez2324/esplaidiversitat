<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Comprobamos que los datos del formulario han sido enviados
    $name = isset($_POST['name']) ? $_POST['name'] : 'No proporcionado';
    $email = isset($_POST['email']) ? $_POST['email'] : 'No proporcionado';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : 'No proporcionado';
    $message = isset($_POST['message']) ? $_POST['message'] : 'No proporcionado';

    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.buzondecorreo.com'; // Servidor SMTP
    $mail->SMTPAuth = true;
    $mail->Username = 'clubdesplai@diversitatludica.cat'; // Tu dirección de correo electrónico
    $mail->Password = 'Diversitatludica2025'; // Tu contraseña de correo
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Encriptación SSL/TLS
    $mail->Port = 465; // Puerto 465 para SSL/TLS

    // Remitente y destinatario
    $mail->setFrom('clubdesplai@diversitatludica.cat', 'Formulari Web');
    $mail->addAddress('diversitatludica@fundesplai.org'); // Dirección de destino del correo

    // Contenido del mensaje
    $mail->isHTML(true);
    $mail->Subject = 'Nou missatge des del formulari web';
    $mail->Body = "
        <h2>Nou missatge del formulari:</h2>
        <p><strong>Nom:</strong> $name</p>
        <p><strong>Correu electrònic:</strong> $email</p>
        <p><strong>Telèfon:</strong> $phone</p>
        <p><strong>Missatge:</strong><br>$message</p>
    ";

    // Enviar el correo
    $mail->send();
    echo 'Missatge enviat correctament.';
} catch (Exception $e) {
    echo "Error: El missatge no s\'ha pogut enviar. {$mail->ErrorInfo}";
}
?>
