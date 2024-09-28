import { chatResponse } from '../integrations/chat';

class AssistantController {
  async getMessage(req, res) {
    let { content, id } = req.query;
    const chats = [];

    if (!content) {
      return res.status(400).json('The data in content not exists');
    }

    if (!id) {
      const len = chats.push([]);
      id = len - 1;
    }

    chats[id].push({ content: content, role: 'user' });

    const answer = await chatResponse(chats[id]);

    const assistantAnswer = answer.choices[0].message;

    chats[id].push(assistantAnswer);

    res.json({ response: assistantAnswer, id: id });
  }

  async sendPDFText(req, res) {
    const text = req.extractedText;

    res.json({ Text: text });
  }
}

export default new AssistantController();
