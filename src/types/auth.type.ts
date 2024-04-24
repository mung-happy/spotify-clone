export interface authType {
    _id:string
    name: string;
    email: string;
    homeTown: string;
    phone: string
    address: string
}
export interface authResponse {
    token:string
    message:string
    user:authType
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