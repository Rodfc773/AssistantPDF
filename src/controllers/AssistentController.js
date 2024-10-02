import { chatResponse } from '../integrations/chat';

class AssistantController {
  async getMessage(req, res) {
    const chats = [];
    let { content, id } = req.query;

    if (!content) {
      return res.status(400).json('The data in content not exists');
    }

    if (!id) {
      const len = chats.push([]);
      id = len - 1;
    }

    chats[id].push({ content: content, role: 'user' });

    try {
      const answer = await chatResponse(chats[id]);

      const assistantAnswer = answer.choices[0].message;

      chats[id].push(assistantAnswer);

      res.json({ response: assistantAnswer.content, id: id });
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      res.status(500).json({
        errors: [
          'We reached the limit of usage, please wait until we buy more usage',
        ],
      });
    }
  }

  async sendPDFText(req, res) {
    const chats = [];
    const text = req.extractedText;

    let { id } = req.query;

    if (!text)
      res.status(400).json({ errors: [`There isn't content in the file`] });

    if (!id) {
      const len = chats.push([]);
      id = len - 1;
    }

    chats[id].push({
      content: `Faça um resumo do seguinte texto: ${text}`,
      role: 'user',
    });

    try {
      const answer = await chatResponse(chats[id]);

      const assistantAnswer = answer.choices[0].message;

      chats[id].push(assistantAnswer);

      res.json({ response: assistantAnswer.content, id: id });
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      res.status(500).json({
        errors: [
          'We reached the limit of usage, please wait until we buy more usage',
        ],
      });
    }
  }
}

export default new AssistantController();
