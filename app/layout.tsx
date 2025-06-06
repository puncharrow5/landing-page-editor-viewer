import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getClient } from "@/config/client";
import { ToastContainer } from "react-toastify";
import ApolloWrapper from "./apollo-wrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "랜딩페이지 에디터 웹 뷰어",
  description: "랜딩페이지로 제작한 웹을 볼 수 있는 뷰어입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = getClient();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
