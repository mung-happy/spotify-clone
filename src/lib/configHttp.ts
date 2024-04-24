
const API = process.env.NEXT_PUBLIC_URL_SERVER

export class HttpError extends Error {
    status: number
    payload: any
    constructor({ status, payload }: { status: number; payload: any }) {
      super('Http Error')
      this.status = status
      this.payload = payload
    }
  }
  export const isClient = () => typeof window !== 'undefined'
const request = async (method:"GET"|"POST"|"PUT"|"DELETE",endpoint:string,body?:any)=>{
    const baseHeaders:{ [key: string]: string} = {"Content-Type": "application/json"}
    if (isClient()) {
        const dataLocal = localStorage.getItem('user')
        if (dataLocal) {
           const data = JSON.parse(dataLocal)
          baseHeaders.Authorization = `Bearer ${JSON.parse(data.token)}`
        }
      }
    const fullUrl = endpoint.startsWith("/") ? `${API}${endpoint}` : `${API}/${endpoint}`
    const res = await fetch(fullUrl,{
        headers:{
        },
        body: body ? JSON.stringify(body): undefined,
        method
    })
    const payload = await res.json()
    const data = {
        status: res.status,
        payload
    }
    
        if(!res.ok){
            throw new HttpError(data)
        }
    return data
}

const https = {
    get(endpoint:string) {
        return request("GET",endpoint)
    },
    post(endpoint:string,data:any){
        return request("POST",endpoint,data)
    },
    put(endpoint:string,data:any){
        return request("PUT",endpoint,data)
    },
    delete(endpoint:string){
        return request("DELETE",endpoint)
    },
}
export default https