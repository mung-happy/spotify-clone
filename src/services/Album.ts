export async function getAlbum() {
    try {
      const response = await fetch(`https://spotify-be.vercel.app/album`,{
        next: { revalidate: 20 },
      });
      const data =await response.json();
      
      return data
      
      // return response.json();
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  }
    export async function getAlbumId(pid:string) {
      try {
        const response = await fetch(`https://spotify-be.vercel.app/album/${pid}`,{
          next: { revalidate: 20 },
        });
        const data =await response.json();
        return data
        // return response.json();
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
      }
    }