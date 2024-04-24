import https from "@/lib/configHttp";

// Trong một trang hoặc component của bạn
export async function getMusic() {
   return https.get("track")
  }
  export async function getMusicId(pid:string) {
    try {
      const response = await fetch(`https://spotify-be.vercel.app//${pid}`);
      const data =await response.json();
      console.log(data);
      return data
      // return response.json();
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  }
  