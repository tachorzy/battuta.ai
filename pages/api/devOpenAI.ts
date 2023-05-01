// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'POST'){
    const config = new Configuration({
      apiKey: process.env.OPEN_AI_KEY,
    });

    const api = new OpenAIApi(config);

    const result = await api.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": "Can you explain the benefits of using Typescript over something like Javascript for Web Development?"}],
    });
    
    res.status(200).json({ data: result.data.choices[0].message?.content })
  } else{
    res.status(405).json({ message: 'Method not allowed' })
  }
}
