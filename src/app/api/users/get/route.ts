import { User } from "@/actions/users/create/interface";
import { redis } from "@/lib/redis/config";
import { redis_json_get_all } from "@/lib/redis/repository";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // if (keys.length === 0) {
    //   return NextResponse.json({
    //     status: 404,
    //     statusText: "users not found",
    //     data: [],
    //   });
    // }

    // for (const key of keys) {
    //   const user = (await redis.call("JSON.GET", key)) as string;
    //   const _user = JSON.parse(user) as User;
    //   users.push(_user);
    // }

    const items = await redis_json_get_all("user:*");
    const users = items.map((item: string, index) => JSON.parse(item) as User);

    return NextResponse.json({
      status: 200,
      statusText: "get users successfully",
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
