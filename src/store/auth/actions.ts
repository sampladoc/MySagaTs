import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS
} from "./actionTypes";

import {
    LoginPayload,
    LoginSuccessPayload,
    LoginFailurePayload,
    SignupSuccessPayload,
    SignupFailurePayload,
    LoginRequest,
    LoginSuccess,
    LoginFailure
} from "./types";

export const loginRequest = (payload: LoginPayload) : LoginRequest => ({
    type: LOGIN_REQUEST,
    payload
})

export const loginSuccess = (payload: LoginSuccessPayload) : LoginSuccess => ({
    type: LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload: LoginFailurePayload) : LoginFailure => ({
    type: LOGIN_FAILURE,
    payload
})