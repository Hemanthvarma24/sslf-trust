import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/layout";
import WhatsAppChatButton from "@/components/whatsappChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSLF EDUCATIONAL TRUST",
  description: "SSLF Charity Trust empowers youth through scholarships, healthcare, and entrepreneurship support. Join us in creating a better future – You Need Us!",
  keywords: "SSLF Educational Trust, SSLF Charity Trust, nonprofit organization, community service, social initiatives, education support, youth empowerment, scholarships, healthcare programs, entrepreneurship development, charitable trust, community upliftment, social welfare, nonprofit education, skill development, youth mentoring"
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