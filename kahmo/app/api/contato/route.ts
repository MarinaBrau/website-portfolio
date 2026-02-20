import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { appendLead } from "@/lib/sheets";
import { sendLeadEmail } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: parsed.error.issues[0]?.message ?? "Dados inválidos" },
        { status: 400 }
      );
    }

    const { nome, whatsapp, email } = parsed.data;

    // Run Sheets and email in parallel
    await Promise.all([
      appendLead({ nome, whatsapp, email }),
      sendLeadEmail({ nome, whatsapp, email }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[/api/contato]", error);
    return NextResponse.json(
      { success: false, message: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
