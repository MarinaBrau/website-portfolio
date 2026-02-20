export interface PortfolioClient {
  cliente: string;
  servico: string;
  cor: string;
  imagens: string[];
  descricao: string;
}

export interface ContactFormData {
  nome: string;
  whatsapp: string;
  email: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
}
