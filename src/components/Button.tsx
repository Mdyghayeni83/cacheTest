"use client";

import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

type PropType = ButtonProps & {
  children: React.ReactNode;
};

export default function Buttons({ children, ...other }: PropType) {
  return (
    <Button {...other} sx={{ borderRadius: "12px" }}>
      {children}
    </Button>
  );
}
