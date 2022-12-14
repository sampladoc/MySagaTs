import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS
} from "./actionTypes";

export interface IAuth {
    token: string;
}

export interface AuthState {
    pending: boolean;
    token: string;
    error: string | null;
}

export interface LoginPayload {
    values: {email: string, password: string};
    callback: any;
}

export interface LoginSuccessPayload {
    token: string;
}

export interface LoginFailurePayload {
    error: string;
}

export interface SignupSuccessPayload {
    token: string;
}

export interface SignupFailurePayload {
    error: string;
}

export interface LoginRequest {
    type: typeof LOGIN_REQUEST;
    payload: LoginPayload;
}

export interface LoginSuccess {
    type: typeof LOGIN_SUCCESS;
    payload: LoginSuccessPayload;
}

export interface LoginFailure {
    type: typeof LOGIN_FAILURE;
    payload: LoginFailurePayload;
}


export type AuthActions = LoginRequest | LoginSuccess | LoginFailure;
