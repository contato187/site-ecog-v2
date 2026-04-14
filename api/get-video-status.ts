
import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const { operationId } = req.query;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY não configurada." });
  }

  try {
    const genAI = new GoogleGenAI(apiKey);
    // @ts-ignore
    const operation = await genAI.operations.getVideosOperation({ operation: operationId as string });

    res.status(200).json(operation);
  } catch (error: any) {
    console.error("Erro ao verificar status do vídeo:", error);
    res.status(500).json({ error: "Falha ao verificar status.", details: error.message });
  }
}
