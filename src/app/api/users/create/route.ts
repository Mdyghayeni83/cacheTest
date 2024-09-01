import { redis } from "@/lib/redis/config";
import { redis_create, redis_list } from "@/lib/redis/repository";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const request = await req.json();

    const res = await redis.call(
      "JSON.SET",
      `user:${request.id}`,
      "$",
      `{"firstname":"${request.firstname}", "lastname":"${request.lastname}", "id":"${request.id}", "phone":"${request.phone}"}`
    );
    console.log(res);

    const indexList = await redis_list();

    // if (!indexList.includes("idx:user")) {
    await redis_create(
      "idx:user",
      "JSON",
      "user:",
      // "$.firstname as firstname text $.lastname as lastname text $.id as id numeric $.phone as phone text"
      {
        one: {
          tow: {
            three: {
              type: "numeric",
            },
          },
        },
      }
    );
    // }
    // else {
    //   console.log("idx:user already exists");
    // }

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
