"use server";

import { revalidateTag } from "next/cache";

export async function deleteUserAction(id: string) {
  try {
    await fetch("http://localhost:3042/api/users/delete-user/" + id, {
      method: "DELETE",
    });
    revalidateTag("getUsers");
    return { response: { data: [] }, error: null };
  } catch (error) {
    return { response: { data: [] }, error: error };
  }
}
