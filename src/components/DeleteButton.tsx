"use client";

import { deleteUserAction } from "@/actions/users/delete-user/deleteUserAction";
import { ButtonHTMLAttributes } from "react";

interface PropType extends ButtonHTMLAttributes<HTMLButtonElement> {
  userId: string;
}
export default function DeleteButton({ userId, ...other }: PropType) {
  return (
    <button
      className="min-w-[20px] text-xs h-5 p-2 flex justify-center items-center rounded-full bg-[#12A150]"
      onClick={() => deleteUserAction(userId)}
      type="button"
      {...other}
    >
      del
    </button>
  );
}
