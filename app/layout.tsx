import type { Metadata } from "next";
import "./globals.css";
import montserrat from "../assets/fonts/montserrat";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className={`${montserrat.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex flex-grow flex-col items-center justify-center lg:justify-items-center p-12 md:px-24 lg:pt-32 lg:grid md:grid-cols-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
