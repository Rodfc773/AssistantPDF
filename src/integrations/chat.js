import 'dotenv/config';
import axios from 'axios';

export async function chatResponse(message) {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente para resumo de informações',
        },
        ...message,
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  );

  return response.data;
}
