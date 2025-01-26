import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Footer from "@/components/footer";
import EmailSubscriptionModal from "@/components/subscription-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mizou Accessories | Your best place for all your bling",
  description: "Mizou Accessories is the best place to find all your bling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
        <EmailSubscriptionModal />
          <ToasterProvider />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
