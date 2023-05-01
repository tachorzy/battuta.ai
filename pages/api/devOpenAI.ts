// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'POST'){
    // FOR WHEN FRONTEND EXISTS
    // const {cities, startingCity} = req.body;
    
    // FOR TESTING
    let cities: string[] = ['Islamabad','Lahore','Karachi','Peshawar','Rawalpindi'];
    let startingCity: string = 'Lahore';
    const config = new Configuration({
      apiKey: process.env.OPEN_AI_KEY,
    });


    const processedInput: string = `Traveling to ${cities.join(', ')} starting from ${startingCity}. Give an economical route that makes sense for someone who wants to visit all the cities. The route should start from ${startingCity} and end at ${startingCity}. The route should be as short as possible and make the most sense logically.`;

    const api = new OpenAIApi(config);

    const result = await api.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{'role': 'user', 'content': processedInput}],
    });
    
    res.status(200).json({ data: result.data.choices[0].message?.content })
  } else{
    res.status(405).json({ message: 'Method not allowed' })
  }
}
