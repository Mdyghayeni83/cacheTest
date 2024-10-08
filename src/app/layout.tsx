import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import ToastContainer from "@/components/ToastContainer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  team,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Suspense fallback={<>isLoading</>}>
          {children}
          {/* <div className="haha">{team}</div> */}
        </Suspense>
      </body>
    </html>
  );
}
