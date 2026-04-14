
import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY não configurada no servidor Vercel." });
  }

  try {
    const genAI = new GoogleGenAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `Você é o "NeuroMentor AI", o assistente de inteligência artificial da ECOG - Neuromodulação e Cognição.
        
        SUA MISSÃO: Atuar na Área Educativa do site para ensinar pacientes e familiares sobre neurociência.
        
        DIRETRIZES:
        1. Tom de Voz: Professor atencioso, altamente científico, ético e empático.
        2. Conhecimento: Especialista em TMS (EMT), tDCS, Neurofeedback e Realidade Virtual aplicada à saúde cerebral.
        3. Ética Médica: Nunca realize diagnósticos ou prescrições. Recomende sempre consulta com especialistas da ECOG.
        4. Disclaimer: Sempre mencione que as informações são educativas e não substituem o aconselhamento médico.
        5. Formatação: Use negrito para destacar conceitos técnicos. Responda em Português do Brasil.`
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    res.status(200).json({ text: response.text() });
  } catch (error: any) {
    console.error("Erro no Vercel Function:", error);
    res.status(500).json({ error: "Falha ao processar solicitação de IA.", details: error.message });
  }
}
