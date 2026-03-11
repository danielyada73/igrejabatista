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

  // Configuração para Gmail baseada nas credenciais fornecidas
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.SMTP_USER, // contato.yadastudio@gmail.com
      pass: process.env.SMTP_PASS, // App Password do Google
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    await transporter.verify();
    
    await transporter.sendMail({
      from: `"Site IBBJ" <${process.env.SMTP_USER}>`,
      to: recipients.join(', '),
      replyTo: email,
      subject: subject,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    });
    
    return response.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error: any) {
    console.error('ERRO SMTP GMAIL:', error);
    
    return response.status(500).json({ 
      error: 'Falha ao enviar e-mail', 
      details: error.message,
      code: error.code
    });
  }
}
