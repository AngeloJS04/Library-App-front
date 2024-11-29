export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    logged?: boolean;
    error?: {
        message: string;
    };
}

export interface IResponseLogoutUser {
    logout: boolean;
}

export interface IRegisterRequest {
    email: string;
    username: string
    password: string;
}

