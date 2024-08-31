import { redis } from "@/lib/redis/config";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const request = await req.json();

    await redis.call(
      "JSON.SET",
      `user:${request.id}`,
      "$",
      `{"firstname":"${request.firstname}", "lastname":"${request.lastname}", "id":"${request.id}", "phone":"${request.phone}"}`
    );

    return NextResponse.json({
      status: 200,
      statusText: "success",
      data: [],
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      statusText: "success",
      data: [],
    });
  }
}
