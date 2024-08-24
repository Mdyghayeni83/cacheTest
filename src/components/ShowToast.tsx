"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

interface PropType {
  status: number;
  text: { success: string; error: string };
}

export default function ShowToast({ status, text }: PropType) {
  useEffect(() => {
    if (status === 200) {
      toast.success(text.success);
    } else {
      toast.error(text.error);
    }
  });
  return <div></div>;
}
