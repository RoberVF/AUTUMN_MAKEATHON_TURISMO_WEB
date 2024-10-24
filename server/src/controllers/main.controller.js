import axios from 'axios'

import dotenv from 'dotenv'
dotenv.config()



export const generateResponse = async (req, res) => {
    try {
        const { prompt } = req.body

        const response = await axios.post('https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B',
            { 
                inputs: prompt, 
                parameters: {
                    max_length: 100,
                    temperature: 1,
                    top_k: 50
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.API_KEY_HUGGINGFACE}`,
                },
            }
        )

        res.json({
            response: response.data
        })
    } catch (e) {
        console.log("Ha ocurrido un error: \n", e)
    }
}

