import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
    clientName: String,
    phone: String,
    message: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Client = mongoose.model('Client', clientSchema);

export default Client;