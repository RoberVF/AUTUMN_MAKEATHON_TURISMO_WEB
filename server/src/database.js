import mongoose from 'mongoose'

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_DATABASE = process.env.DB_DATABASE

export const connectDB = async () => {
    try {
        // PARA ATLAS
        // await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_DATABASE}`) 

        // PARA LOCAL
        // await mongoose.connect(`mongodb://0.0.0.0:27017`)
        
        console.log("> DATABASE IS CONNECTED!")
    } catch (e) {
        console.log(e)
    }
}