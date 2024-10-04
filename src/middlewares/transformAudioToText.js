import { trasncribeAudio } from '../integrations/whisper';

export async function audioToText(req, res) {
  const { filePath } = req.body;

  if (!filePath)
    return res
      .status(500)
      .json({ errors: ['There was an error with the path of the file'] });
  try {
    const text = await trasncribeAudio(filePath);
    return res.json(text);
  } catch (error) {
    return res.status(500).json(error);
  }
}
