import { Resend } from "resend";

export async function sendLeadEmail(data: {
  nome: string;
  whatsapp: string;
  email: string;
}) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "contato@kahmo.com.br",
    to: process.env.RESEND_TO_EMAIL ?? "",
    subject: `Novo orçamento: ${data.nome}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #191919; color: #e9e8e9; border-radius: 8px;">
        <h2 style="color: #ffa5da; margin-bottom: 24px;">✨ Novo pedido de orçamento</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #90e5e6; font-weight: bold; width: 120px;">Nome</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #333;">${data.nome}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #90e5e6; font-weight: bold;">WhatsApp</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #333;">${data.whatsapp}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #90e5e6; font-weight: bold;">Email</td>
            <td style="padding: 12px 0;">${data.email}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; color: #888; font-size: 14px;">Enviado via kahmo.com.br</p>
      </div>
    `,
  });
}
