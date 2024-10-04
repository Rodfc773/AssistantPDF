import OpenAI from 'openai';
import { resolve } from 'path';
import fs from 'fs';

const openai = new OpenAI({ apiKey: process.env.API_KEY });

export async function trasncribeAudio(filePath) {
  filePath = resolve(__dirname, filePath);

  const trasncriptionText = await openai.audio.transcriptions.create({
    file: fs.createReadStream(filePath),
    model: 'whisper-1',
    language: 'pt',
    response_format: 'text',
  });

  return trasncriptionText;
}
