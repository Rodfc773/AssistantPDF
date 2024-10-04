import youtubedl from 'youtube-dl-exec';
import { resolve } from 'path';

class VideoToAudioConvert {
  constructor(url) {
    this.url = url;
    this.createFilePath();
  }

  async createAudio() {
    await youtubedl(this.url, {
      extractAudio: true, // Extraí apenas o áudio
      audioFormat: 'mp3', // Define o formato do áudio como MP3
      output: this.filePath, // Caminho de saída do arquivo
    });
  }
  createFilePath() {
    this.createFileName();
    this.filePath = resolve(
      __dirname,
      '../../uploads/videos',
      `${this.fileName}.mp3`,
    );
  }
  createFileName() {
    const random = Math.floor(Math.random() * 10000 + 10000);
    this.fileName = `${Date.now()}_${random}`;
  }

  getFilePath() {
    return this.filePath;
  }
}

export async function videoToAudio(req, res, next) {
  try {
    const { URL } = req.body;
    console.log(req.body);

    if (!URL) return res.status(400).json({ errors: ['Any URL was sent'] });

    const audio = new VideoToAudioConvert(URL);

    // eslint-disable-next-line no-unused-vars
    let _ = await audio.createAudio();

    req.body.filePath = audio.getFilePath();

    return next();
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    res.status(500).json({
      errors: ['Somethinh went wrong with the conversion of Video to Audio'],
    });
  }
}
