import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";

export const metadata: Metadata = {
  title: "Test Website",
  description: "Test website for google cloud vm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
