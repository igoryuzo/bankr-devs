import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BANKR | Partner Deploy API",
  description: "Deploy tokens on behalf of your users via a single REST endpoint. The complete financial stack for self-sustaining agents.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise-overlay">
        {children}
      </body>
    </html>
  );
}
