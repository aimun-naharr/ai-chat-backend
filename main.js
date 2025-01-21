const express = require('express');
const axios = require('axios');
require('dotenv').config();
const OpenAI = require("openai");
const AI = new OpenAI();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Route to handle AI requests
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  console.log('reponse')
  try {

    const completion = await AI.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "developer", content: "You are a helpful assistant." },
        {
          role: "user",
          content: "Write a haiku about recursion in programming.",
        },
      ],
    });
    console.log(completion.choices[0].message);

    // const response = await axios.post(
    //   'https://api.openai.com/v1/chat/completions',
    //   {
    //     model: 'gpt-3.5-turbo',
    //     messages: [{ role: 'user', content: message }],
    //   },
    //   {
    //     headers: {
    //       'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
    // console.log('response', response)

    res.json({ aiResponse: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    res.status(500).json({ error: 'Failed to fetch AI response' });
  }
});

// Mock backend route (for testing purposes)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
