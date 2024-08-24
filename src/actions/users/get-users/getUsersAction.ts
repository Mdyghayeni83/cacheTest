"use server";

import { AppResponseType } from "@/@types/response";
import { GetUserAction } from "./interface";

export async function getUsersAction() {
  try {
    const res = await fetch("http://192.168.16.162:3012/api/users/get-users", {
      method: "GET",
      next: { tags: ["getUsers"] },
    });
    const response = await res.json();
    return response as AppResponseType<GetUserAction["response"]["data"]>;
  } catch (error) {
    return {} as AppResponseType<GetUserAction["response"]["data"]>;
  }
}
