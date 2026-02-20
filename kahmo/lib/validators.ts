import { z } from "zod";

export const contactSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  whatsapp: z
    .string()
    .min(10, "WhatsApp inválido")
    .max(20, "WhatsApp inválido")
    .regex(/^[\d\s\(\)\-\+]+$/, "WhatsApp deve conter apenas números"),
  email: z.string().email("Email inválido").max(200, "Email muito longo"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
