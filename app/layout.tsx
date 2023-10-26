import type { Metadata } from "next";
import "./globals.css";
import montserrat from "../assets/fonts/montserrat";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "FIGURiiNE",
  description: "A LEGO figurine builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${montserrat.className} flex flex-col min-h-screen`}>
          <Navbar />
          <main className="h-full">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
