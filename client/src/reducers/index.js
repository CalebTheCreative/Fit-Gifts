import { combineReducers } from 'redux';

import clients from './clients';
import auth from './auth';

export const reducers = combineReducers({ clients, auth });
