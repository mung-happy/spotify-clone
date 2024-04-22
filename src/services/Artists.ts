export async function getGenres() {
    try {
      const response = await fetch(`https://spotify-be.vercel.app/artist`,{
        next: { revalidate: 200 },
      });
      const data =await response.json();
      console.log(data);
      return data
      
      // return response.json();
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  }
    export async function getGenresById(pid:string) {
      try {
        const response = await fetch(`https://spotify-be.vercel.app/artist/${pid}`,{
          next: { revalidate: 200 },
        });
        const data =await response.json();
        return data
        // return response.json();
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
      }
    }