
export interface SignupResponse {
    status: boolean;
    message: string;
}

export interface LoginResponse {
    status: boolean;
    message: string;
    user: {
        id: string;
        name: string;
        email: string;
    }
}