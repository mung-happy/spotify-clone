import { ARTIST } from "@/constants";
import axiosInstance from "@/lib/token";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await axiosInstance.get(`artists?ids=${ARTIST}`);
    const data = response.data;
    return Response.json(data);
  } catch (error) {
    console.log(error);
  }
}
