"use server";

import { AppResponseType } from "@/@types/response";
import { GetUserAction } from "./interface";
import { API_ROUTES } from "@/app/api/endpoints";

export async function getUsersAction() {
  try {
    const res = await fetch(API_ROUTES.users.get, {
      method: "GET",
      next: { tags: ["getUsers"] },
    });
    const response = await res.json();
    return response as AppResponseType<GetUserAction["response"]["data"]>;
  } catch (error) {
    return {} as AppResponseType<GetUserAction["response"]["data"]>;
  }
}
