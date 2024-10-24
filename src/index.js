import app from './app.js'
import connectDB from './database.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`> SERVER UP ON PORT ${PORT}`)
})

connectDB()
