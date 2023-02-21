import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';

import axios from '../../../services/axios';

export function* loginRequest({ payload }) {
    try {
        const response = yield call(axios.post, '/token', payload);

        yield put(actions.loginSuccess({ ...response.data }));

        toast.success('Login Efetuado.');

        /*
        axios.interceptors.request.use((config) => {
            const token = response.data.token;
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        });
        */

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    } catch (e) {
        toast.error('Usuário ou senha inválida.');

        console.log(e);

        yield put(actions.loginFailure());
    }
}

export function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '');

    if (!token) return;

    axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
