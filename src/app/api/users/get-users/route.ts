import { redis } from "@/lib/redis/config";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const keys = await redis.keys("user:*");

    if (keys.length === 0) {
      return NextResponse.json({
        status: 404,
        statusText: "success",
        data: [],
      });
    }

    const users = [];
    for (const key of keys) {
      const userData = await redis.hgetall(key);
      users.push(userData);
    }
    return NextResponse.json({
      status: 200,
      statusText: "success",
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      statusText: "server error",
      data: [],
    });
  }
}
