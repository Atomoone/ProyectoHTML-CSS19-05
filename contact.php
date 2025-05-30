<!-- contact.php -->
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $mensaje = htmlspecialchars(trim($_POST['mensaje']));

    if (!$nombre || !$email || !$mensaje) {
        echo 'Por favor completa todos los campos.';
        exit;
    }

    $destinatario = 'mora.pabloesteban@gmail.com'; // Cambia por tu correo
    $asunto = 'Nuevo mensaje de contacto de ' . $nombre;
    $cuerpo = "Nombre: $nombre\nEmail: $email\n\nMensaje:\n$mensaje";
    $headers = "From: $nombre <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo '<p class="status">Gracias, tu mensaje ha sido enviado correctamente.</p>';
    } else {
        echo '<p class="status">Lo siento, hubo un error al enviar tu mensaje. Inténtalo más tarde.</p>';
    }
} else {
    header('Location: contacto.html');
    exit;
}
?>