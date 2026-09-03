import type { Metadata } from "next";
import { Nothing_You_Could_Do } from "next/font/google";
import "./globals.css";

const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nothing",
});

export const metadata: Metadata = {
  title: "Ink & Code",
  description: "Software development, illustration, and things in between.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nothingYouCouldDo.variable}>
        {children}
      </body>
    </html>
  );
}