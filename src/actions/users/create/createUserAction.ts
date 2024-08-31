"use server";

import { revalidateTag } from "next/cache";
import { CreateUserAction } from "./interface";
import { API_ROUTES } from "@/app/api/endpoints";

export async function createUserAction(formData: FormData) {
  try {
    const user = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      id: +(formData.get("id") as string),
      phone: formData.get("phone"),
    };
    const res = await fetch(API_ROUTES.users.user.create, {
      method: "POST",
      body: JSON.stringify(user),
    });
    const response = await res.json();
    revalidateTag("getUsers");
    return { response, error: null } as {
      response: CreateUserAction["response"];
    };
  } catch (error) {
    return { response: { data: [] }, error: error } as {
      response: CreateUserAction["response"];
    };
  }
}
