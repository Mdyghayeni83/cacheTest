import { redis } from "@/lib/redis/config";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({
        status: 400,
        statusText: "user id missing",
        data: [],
      });
    }

    const userKey = `user:${id}`;

    const userExists = await redis.exists(userKey);
    if (!userExists) {

      return NextResponse.json({
        status: 404,
        statusText: "user not exist",
        data: [],
      });
    }

    await redis.del(userKey);

    return NextResponse.json({
      status: 200,
      statusText: "success",
      data: [],
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      statusText: "internal server error",
      data: [],
    });
  }
}
