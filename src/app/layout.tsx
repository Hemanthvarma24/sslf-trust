import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/layout";
import WhatsAppChatButton from "@/components/whatsappChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSLF EDUCATIONAL TRUST",
  description: "We help people in need",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
          <WhatsAppChatButton />
        </Layout>
      </body>
    </html>
  );
}
