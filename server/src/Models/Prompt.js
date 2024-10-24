import mongoose from 'mongoose'

const promptSchema = new mongoose.Schema({
    clientName : {
        type: String,
        required: true
    },
    clientDNI: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model("Prompt", promptSchema)

