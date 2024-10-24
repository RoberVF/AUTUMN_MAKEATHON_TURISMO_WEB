import { Router } from "express";

import  {generateResponse}   from  '../controllers/main.controller.js'

const router = Router()

router.get("/", (req, res) => {
    res.send("OK")
})

router.post("/chat", generateResponse)

export default router