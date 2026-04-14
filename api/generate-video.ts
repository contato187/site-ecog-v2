
import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, imageBase64, aspectRatio } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY não configurada." });
  }

  try {
    const genAI = new GoogleGenAI(apiKey);
    // @ts-ignore
    const model = genAI.getGenerativeModel({ model: "veo-3.1-fast-generate-preview" });

    // @ts-ignore
    const operation = await model.generateVideos({
      prompt: prompt,
      image: {
        imageBytes: imageBase64,
        mimeType: 'image/png',
      },
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: aspectRatio || '16:9'
      }
    });

    res.status(200).json({ operationId: operation.name });
  } catch (error: any) {
    console.error("Erro na geração de vídeo:", error);
    res.status(500).json({ error: "Falha ao iniciar geração de vídeo.", details: error.message });
  }
}
