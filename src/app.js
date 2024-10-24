import express from 'express'
import openai from 'openai'
import cors from 'cors'
import morgan from 'morgan'

import mainRoutes from './routes/index.routes.js'


const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors())

app.use(mainRoutes)


export default app;