const API = "https://spotify-clone-sk8n.vercel.app/api/";

export class HttpError extends Error {
  status: number;
  payload: any;
  constructor({ status, payload }: { status: number; payload: any }) {
    super("Http Error");
    this.status = status;
    this.payload = payload;
  }
}

export const isClient = () => typeof window !== "undefined";
const request = async <Response>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  body?: any
) => {
  const fullUrl = endpoint.startsWith("/")
    ? `${API}${endpoint}`
    : `${API}/${endpoint}`;
  const res = await fetch(fullUrl, {
    body: body ? JSON.stringify(body) : undefined,
    method,
    next: { revalidate: 60 },
  });
  const payload = await res.json();
  const data = {
    status: res.status,
    payload,
  };

  if (!res.ok) {
    throw new HttpError(data);
  }
  return data;
};

export const https = {
  get<Response>(endpoint: string) {
    return request<Response>("GET", endpoint);
  },
  post<Response>(endpoint: string, data: any) {
    return request<Response>("POST", endpoint, data);
  },
  put<Response>(endpoint: string, data: any) {
    return request<Response>("PUT", endpoint, data);
  },
  delete(endpoint: string) {
    return request("DELETE", endpoint);
  },
};
