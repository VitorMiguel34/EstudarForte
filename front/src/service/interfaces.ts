export interface RegisterData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface User {
    name: string;
    email: string;
    id: number;
}

export interface Task {
    id?: number;
    title: string;
    description: string;
    date: string;
    status?: boolean;
}
