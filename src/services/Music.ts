// Trong một trang hoặc component của bạn
export async function getMusic() {
    try {
      const response = await fetch(`https://spotify-be.vercel.app/track`);
      return response.json();
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  }
  