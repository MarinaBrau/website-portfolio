import { google } from "googleapis";
import type { PortfolioClient } from "@/types";

function getAuth() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function appendLead(data: {
  nome: string;
  whatsapp: string;
  email: string;
}) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const date = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: "Leads!A:D",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[date, data.nome, data.whatsapp, data.email]],
    },
  });
}

export async function getPortfolio(): Promise<PortfolioClient[]> {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: "Portfolio!A2:G",
  });

  const rows = response.data.values ?? [];

  return rows
    .filter((row) => row[0])
    .map((row) => ({
      cliente: row[0] ?? "",
      servico: row[1] ?? "",
      cor: row[2] ?? "#ffa5da",
      imagens: [row[3], row[4], row[5]].filter(Boolean),
      descricao: row[6] ?? "",
    }));
}
