import { trasncribeAudio } from '../integrations/whisper';

export async function audioToText(req, res, next) {
  const { filePath } = req.body;

  if (!filePath) {
    return res
      .status(500)
      .json({ errors: ['There was an error with the path of the file'] });
  }

  try {
    const text = await trasncribeAudio(filePath);

    req.body.audioText = text;

    return next();
  } catch (error) {
    return res.status(500).json({ errors: [error] });
  }
}
