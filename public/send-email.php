<?php
header('Content-Type: application/json');

// Destinatários solicitados
$to = "contato@ibbjoinville.com.br, contato.yadastudio@gmail.com";
$subject = "Novo Contato - Site IBBJ";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = $input['name'] ?? 'Não informado';
    $email = $input['email'] ?? 'Não informado';
    $message_content = $input['message'] ?? '';
    
    $body = "Novo contato recebido através do site IBBJ:\n\n";
    $body .= "Nome: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Mensagem:\n$message_content\n\n";
    $body .= "--- \nEnviado em: " . date('d/m/Y H:i:s');
    
    $headers = "From: contato@ibbjoinville.com.br" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'E-mail enviado com sucesso!']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Falha ao enviar e-mail. Verifique a configuração do servidor.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
}
?>
