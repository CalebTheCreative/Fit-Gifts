import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const login = (formData, history) => async (dispatch) => {
	try {
		// login in user..

		history.push('/');
	} catch (err) {
		console.log(err);
	}
};

export const signup = (formData, history) => async (dispatch) => {
	try {
		// singup in user..

		history.push('/');
	} catch (err) {
		console.log(err);
	}
};
