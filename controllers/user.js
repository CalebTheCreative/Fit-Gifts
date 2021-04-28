import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

export const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const currentUser = await User.findOne({ email });

		if (!currentUser) return res.status(404).json({ message: 'User does not exist.' });

		const correctPassword = await bcrypt.compare(password, currentUser.password);

		if (!correctPassword) return res.status(404).json({ message: 'Password is incorrect!' });

		const token = jwt.sign({ email: currentUser.email, id: currentUser._id }, 'test', { expiresIn: '1h' });

		res.status(200).json({ result: currentUser, token });
	} catch (err) {
		res.status(500).json({ message: 'Something went wrong.' });
	}
};

export const signup = async (req, res) => {
	const { email, password, confirmPassword, firstName, lastName } = req.body;
	try {
		const currentUser = await User.findOne({ email });

		if (currentUser) return res.status(404).json({ message: 'User already exists.' });

		if (password !== confirmPassword) return res.status(404).json({ message: 'Passwords do not match.' });

		const hashedPassword = await bcrypt.hash(password, 12);

		const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

		const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });

		res.status(200).json({ result: currentUser, token });
	} catch (error) {}
};
