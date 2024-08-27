import { redis } from "@/lib/redis/config";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log(req);
    
    const request = await req.json();

    console.log(request);
    

    await redis.call('JSON.SET', `user:44`, '$', `{"firstname":"mahdi", "lastname":"gh", "id":"44", "phone":"66"}`);

    return NextResponse.json({
      status: 200,
      statusText: "success",
      data: [],
    });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({
      status: 500,
      statusText: "success",
      data: [],
    });
  }
}
