import { User } from "@/actions/users/create/interface";
import { redis } from "@/lib/redis/config";
import { RedisORM } from "@/lib/redis/repository";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const request = await req.json();
    const client = new RedisORM();

    // const res = await redis.call(
    //   "JSON.SET",
    //   `user:${request.id}`,
    //   "$",
    //   `{"firstname":"${request.firstname}", "lastname":"${request.lastname}", "id":"${request.id}", "phone":"${request.phone}"}`
    // );
    const res = await client.setJson<User>(`user:${request.id}`, {
      firstname: request.firstname,
      lastname: request.lastname,
      id: request.id,
      phone: request.phone,
    });
    const indexList = await client.getIndexList();
    if (!indexList.includes("idx:user")) {
      await client.createIndex("idx:user", "JSON", "user:", {
        firstname: "text",
        lastname: "text",
        tasks: [
          {
            assigned_by: {
              info: {
                firstname: "text",
                lastname: "text",
                id: "numeric",
              },
            },
            summary: "text",
            tags: ["text"],
          },
        ],
      });
    } else {
      console.log("idx:user already exists");
    }

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
