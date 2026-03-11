import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = request.body;
  const recipients = ["contato@ibbjoinville.com.br", "contato.yadastudio@gmail.com"];
  const subject = "Novo Contato - Site IBBJ";

  const transporter = nodemailer.createTransport({
    host: "mail.ibbjoinville.com.br", // Ajustar conforme necessário se houver host específico
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Site IBBJ" <contato@ibbjoinville.com.br>`,
      to: recipients.join(', '),
      replyTo: email,
      subject: subject,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    });
    return response.status(200).json({ success: true, message: 'E-mail enviado via Vercel com sucesso' });
  } catch (error: any) {
    console.error('Erro ao enviar e-mail:', error);
    return response.status(500).json({ 
      error: 'Falha ao enviar e-mail', 
      details: error.message 
    });
  }
}
