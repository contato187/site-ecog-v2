
/**
 * NeuroMentor AI - Serviço de Suporte Educativo (Proxy via Vercel API)
 * Focado em explicações profundas, científicas e acolhedoras sobre neuromodulação.
 */
export const getEducationalAdvice = async (query: string) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: query }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Erro na comunicação com o servidor');
    }

    const data = await response.json();
    return data.text;
  } catch (error: any) {
    console.error("Erro no NeuroMentor AI (Proxy):", error);
    return `Desculpe, tive uma pequena instabilidade neural: ${error.message}. Pode repetir?`;
  }
};
