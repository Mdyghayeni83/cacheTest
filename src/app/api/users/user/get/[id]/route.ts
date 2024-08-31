import { redis } from "@/lib/redis/config";
import { NextResponse } from "next/server";

const exUser = {
  firstname: "دانیال",
  lastname: "خوش نیت",
  id: 112,
  image:
    "https://static.wikia.nocookie.net/breakingbad/images/0/05/Season_2_-_Jesse.jpg/revision/latest/scale-to-width/360?cb=20090617154632",
  address: {
    city: "مشهد",
    province: "خراسان رضوی",
  },
  phone: "09204461028",
  tasks: [
    {
      name: "پیاده سازی ریداکس و استفاده از آن",
      task_id: 1313,
      text: "سلام و وقت بخیر. ساختار ریداکس(Redux) را پیاده سازی کن و دیتای api را داخل آن بریز و از آن برای کامپوننت هایت استفاده کن و خبر بده.",
      assigned_by: {
        fullname: "مهدی قاینی",
        id: 90,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNig_cPjUh-VrQnsJFNZHXnGxKpDNmKeRxxg&s",
      },
    },
    {
      name: "fetch کردن دیتا و استفاده از آن",
      task_id: 1314,
      text: "از route ای که برات درست کردم استفاده کن و دیتا را fetch کن",
      assigned_by: {
        fullname: "مهدی قاینی",
        id: 90,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNig_cPjUh-VrQnsJFNZHXnGxKpDNmKeRxxg&s",
      },
    },
    {
      name: "به علیرضا سلام کن..",
      task_id: 1314,
      text: "به آقا علیرضای فخار سلام کن",
      assigned_by: {
        fullname: "مهدی قاینی",
        id: 90,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNig_cPjUh-VrQnsJFNZHXnGxKpDNmKeRxxg&s",
      },
    },
    {
      name: "زیاد سرچ کنننن",
      task_id: 1314,
      text: "انقدر سرچ کن که از سرچ کردن خسته بشییییی.",
      assigned_by: {
        fullname: "مهدی قاینی",
        id: 90,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNig_cPjUh-VrQnsJFNZHXnGxKpDNmKeRxxg&s",
      },
    },
  ],
};

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // if (!id) {
    //   return NextResponse.json({
    //     status: 400,
    //     statusText: "user id missing",
    //     data: {},
    //   });
    // }

    // const userKey = `user:${id}`;
    // const user = await redis.call("JSON.GET", userKey);
    // console.log(user);

    // if (!user) {
    //   return NextResponse.json({
    //     status: 404,
    //     statusText: "user not exist",
    //     data: {},
    //   });
    // }

    return NextResponse.json({
      status: 200,
      statusText: "get user successfully",
      data: exUser,
    });
  } catch (error) {
    return NextResponse.json({
      status: 200,
      statusText: "get user successfully",
      data: {},
    });
  }
}
