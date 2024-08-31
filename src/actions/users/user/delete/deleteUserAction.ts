"use server";

import { API_ROUTES } from "@/app/api/endpoints";
import { revalidateTag } from "next/cache";

export async function deleteUserAction(id: string) {
  try {
    await fetch(API_ROUTES.users.user.delete(id), {
      method: "DELETE",
    });
    revalidateTag("getUsers");
    return { response: { data: [] }, error: null };
  } catch (error) {
    return { response: { data: [] }, error: error };
  }
}
