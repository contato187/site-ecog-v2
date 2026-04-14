
import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, aspectRatio, imageSize } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY não configurada." });
  }

  try {
    const genAI = new GoogleGenAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      // @ts-ignore - The SDK might not have the latest types for imageConfig yet
      config: {
        imageConfig: {
          aspectRatio: aspectRatio || '16:9',
          imageSize: imageSize || '1K'
        }
      }
    });

    const response = await result.response;
    
    // Find the image part
    let base64Data = "";
    if (response.candidates && response.candidates[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          base64Data = part.inlineData.data;
          break;
        }
      }
    }

    if (!base64Data) {
      return res.status(404).json({ error: "Nenhuma imagem foi gerada." });
    }

    res.status(200).json({ image: base64Data });
  } catch (error: any) {
    console.error("Erro na geração de imagem:", error);
    res.status(500).json({ error: "Falha ao gerar imagem.", details: error.message });
  }
}
