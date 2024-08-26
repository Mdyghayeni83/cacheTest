import { redis } from "@/lib/redis/config";
import { set } from "@/lib/redis/repository";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const request = await req.json();
    await redis.hset(`user:${request.id}`, { ...request });

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
