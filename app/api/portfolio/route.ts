import { NextResponse } from "next/server";
import { getPortfolio } from "@/lib/sheets";

export const revalidate = 3600; // cache por 1h

export async function GET() {
  try {
    const clients = await getPortfolio();
    return NextResponse.json(clients);
  } catch (error) {
    console.error("[/api/portfolio]", error);
    return NextResponse.json([], { status: 200 }); // retorna vazio, não erro
  }
}
