import {call, put, all, takeLatest} from 'redux-saga/effects'
import {toast} from 'react-toastify'

import * as actions from './actions'
import * as types from '../types'

import axios from '../../../services/axios'

function* loginRequest({ payload }){
    try{
        const response = yield call(axios.post, '/token', payload)

        yield put(actions.loginSuccess({... response.data }))

        toast.success('Login Efetuado.')

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`
    }
    catch(e){
        toast.error('Usuário ou senha inválida.')

        yield put(actions.loginFailure())
    }
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
])