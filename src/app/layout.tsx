import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Misho Dzuliashvili",
  description: "Portfolio Website of Misho Dzuliashvili",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " relative overflow-x-hidden"}>
        <Navbar />
        <Image
          width={0}
          height={0}
          className="absolute top-0 left-0 object-cover overflow-auto max-w-none w-[160%] sm:w-[100%]"
          src="/bg-1.svg"
          alt=""
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
