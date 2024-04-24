
export async function POST(request:Request) {
    const res = await request.json() 
    const date = new Date();
    // Tính toán ngày hết hạn là 1 năm sau ngày hiện tại
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    const expiresDate = new Date(date).toUTCString() 
    return Response.json(res,{
      status: 200,
      headers:{'Set-Cookie': `sessionToken=${res}; Path=/; HttpOnly; Expires=${expiresDate}; SameSite=Lax; Secure`
    }
    })
  }