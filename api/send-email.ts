import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // CORS headers
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = request.body;
  const recipients = ["contato@ibbjoinville.com.br", "contato.yadastudio@gmail.com"];
  const subject = "Novo Contato - Site IBBJ";

  // Configuração mais robusta para SMTP de hospedagem comum
  const transporter = nodemailer.createTransport({
    host: "mail.ibbjoinville.com.br",
    port: 587,
    secure: false, // true para 465, false para outras portas
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      // Importante para muitos servidores de hospedagem que não tem SSL perfeito no subdominio mail.
      rejectUnauthorized: false
    },
    debug: true, // Ativa logs no terminal da Vercel
    logger: true
  });

  try {
    // Verifica a conexão antes de tentar enviar
    await transporter.verify();
    
    await transporter.sendMail({
      from: `"Site IBBJ" <${process.env.SMTP_USER}>`, // Usar o usuário autenticado como remetente
      to: recipients.join(', '),
      replyTo: email,
      subject: subject,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    });
    
    return response.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error: any) {
    console.error('ERRO DETALHADO NO SMTP:', error);
    
    // Retorna o erro detalhado para o frontend ajudar no debug
    return response.status(500).json({ 
      error: 'Falha ao enviar e-mail', 
      details: error.message,
      code: error.code,
      command: error.command
    });
  }
}
