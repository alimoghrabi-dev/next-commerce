import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Providers";
import ShoppingCartModel from "@/components/ShoppingCartModel";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextCommerce",
  description: "E-commerce site with Next.js",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <ShoppingCartModel />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
