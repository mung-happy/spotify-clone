// Trong một trang hoặc component của bạn
export async function getMusic() {
    try {
      const response = await fetch(`https://spotify-be.vercel.app/track`);
      const data =await response.json();
      return data

    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  }
  export async function getMusicId(pid:string) {
    try {
      const response = await fetch(`https://spotify-be.vercel.app/track/${pid}`);
      const data =await response.json();
      console.log(data);
      return data

    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  }
  