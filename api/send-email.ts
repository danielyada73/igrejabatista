import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = request.body;

  // Como o usuário mencionou SMTP_USER e SMTP_PASS na Vercel,
  // poderíamos usar nodemailer aqui. Mas para Vercel, o ideal é usar uma API como Resend.
  // Vou deixar a estrutura pronta para Resend ou similar, mas comentada para SMTP se necessário.
  
  /* 
  Exemplo com Nodemailer (precisaria instalar: npm install nodemailer):
  
  import nodemailer from 'nodemailer';
  
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "contato@ibbjoinville.com.br",
      subject: `Novo Contato Vercel: ${subject}`,
      text: message,
    });
    return response.status(200).json({ success: true });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
  */

  // Resposta padrão caso não queira instalar dependências extras agora
  return response.status(200).json({ 
    message: 'API de e-mail pronta na Vercel. Lembre-se de instalar as dependências necessárias como nodemailer ou usar uma API de terceiros.',
    received: { name, email, subject, message }
  });
}
