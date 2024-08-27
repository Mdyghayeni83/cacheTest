import { redis } from "@/lib/redis/config";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log(req);
    
    const request = await req.json();

    console.log(request);
    

    await redis.call('JSON.SET', `user:${request.id}`, '$', `{"firstname":"${request.firstname}", "lastname":"${request.lastname}", "id":"${request.id}", "phone":"${request.phone}"}`);

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
