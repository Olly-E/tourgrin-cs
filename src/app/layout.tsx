import { Familjen_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

import ReactQueryProvider from "./lib/react-query";
import "./globals.css";

const fg = Familjen_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tourgrin",
  description: "Discover Cities Africa like never before with Tourgrin!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fg.className} bg-[#0B221D] bg-grain`}>
        <Toaster />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
