import { User } from "@/actions/users/create/interface";
import { RedisORM } from "@/lib/redis/repository";
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

    const client = new RedisORM();
    const users = await client.getManyJson("user:*");
    // const users = items.map((item: string, index) => JSON.parse(item) as User);

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
