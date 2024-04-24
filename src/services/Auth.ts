import https from "@/lib/configHttp";
import { FormRegister, IsLogin } from "@/types/auth.type";

export async function Register(data:FormRegister) {
   return https.post("/auth/signup",data)
  }
  export async function Login(data:IsLogin) {
    return https.post("/auth/signin",data)
   }
  
export async function requestNextServerAuth(token:string) {
    fetch("/api/auth",{
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(token)
    })
    .then(response => response.json())
    .then(data=>data)
   }