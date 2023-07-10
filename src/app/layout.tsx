import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Saylor Random Quotes",
  description: "Get a random quote from saylor on bitcoin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto md:pb-32 bg-gray-800 min-h-screen text-gray-200">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
