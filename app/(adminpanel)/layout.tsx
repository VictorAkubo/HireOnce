import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import AdminNav from "../../components/AdminNav"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HireOnce.com",
  description: "HireOnce is a talent sourcing and recruitment partner that helps companies hire reliable remote professionals efficiently. Find the Right Fit. Once.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col lg:flex-row lg:gap-10 min-h-full w-full !bg-gray-100  ">
       <AdminNav/>
        {children}
        </body>
    </html>
  );
}
