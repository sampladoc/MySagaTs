import axios from "axios";
import { all, call, put, takeLatest} from "redux-saga/effects";

import {
    loginFailure,
    loginSuccess
} from "./actions";

import {LOGIN_REQUEST, SIGNUP_REQUEST} from "./actionTypes";
import {IAuth} from "./types";

const login = async (payload: {email:string, password:string}) => {
    const data = await axios.post<IAuth> (
        "https//reqres.in/api/login",
        {
            email: payload.email,
            password: payload.password
        },
        {
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json"
            }
        }
      );
    return data;
}

function* loginSaga(action:any){
    try{
        const response:{token:string} = yield call(login, {
            email: action.payload.values.email,
            password: action.payload.values.password
        })

        yield put(
            loginSuccess({
                token:response.token
            })
        );
        action.payload.callback(response.token);
    } catch(e:any){
        yield put(
            loginFailure({
                error: e.message
            })
        );
    }
}

function* authSaga() {
    yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
}

export default authSaga;