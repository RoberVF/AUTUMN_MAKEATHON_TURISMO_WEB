import { OpenAI } from 'openai'

import dotenv from 'dotenv'
dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.API_KEY
})

export const generateResponse = async (req, res) => {
    try {
        const { prompt } = req.body

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            message: [
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature: 0.7,
            max_tokens: 150
        })

        res.json({
            response: response.data.choices[0].text.trim()
        })
    } catch(e){
        console.log("Ha ocurrido un error: \n", e)
    }
}

