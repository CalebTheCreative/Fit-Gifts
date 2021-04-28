import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
	clientName: String,
	phone: String,
	selectedFile: String,
	likes: {
		type: [String],
		default: [],
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

var Client = mongoose.model('Client', clientSchema);

export default Client;
