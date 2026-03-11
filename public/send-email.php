<?php
header('Content-Type: application/json');

// Carregar variáveis de ambiente ou usar as configuradas no servidor
$smtp_user = getenv('SMTP_USER');
$smtp_pass = getenv('SMTP_PASS');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = $input['name'] ?? 'Não informado';
    $email = $input['email'] ?? 'Não informado';
    $subject_input = $input['subject'] ?? 'Formulário de Contato - IBBJ';
    $message_content = $input['message'] ?? '';

    $to = "contato@ibbjoinville.com.br"; // Altere para o e-mail de destino
    $subject = "Novo Contato: " . $subject_input;
    
    $body = "Nome: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Mensagem:\n$message_content";
    
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'E-mail enviado com sucesso!']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Falha ao enviar e-mail.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
}
?>
