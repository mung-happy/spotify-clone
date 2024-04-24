export interface authType {
    name: string;
    email: string;
    password: string;
    homeTown: string;
    phone: string
    address: string
}

export interface FormRegister {
    name: string;
    email: string;
    password: string;
}
export interface IsLogin {
    email: string;
    password: string;
}