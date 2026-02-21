import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://bankr.bot"
  ),
  title: "BANKR | Partner Deploy API",
  description:
    "Deploy tokens on behalf of your users via a single REST endpoint. Get your partner API key and start launching tokens.",
  icons: {
    icon: "/bnkr.svg",
    apple: "/bnkr.svg",
  },
  openGraph: {
    title: "BANKR | Partner Deploy API",
    description:
      "Deploy tokens on behalf of your users via a single REST endpoint. Get your partner API key and start launching tokens.",
    images: [
      {
        url: "/bnkr-api.png",
        width: 1374,
        height: 1298,
        alt: "Bankr",
      },
    ],
    type: "website",
    siteName: "Bankr",
  },
  twitter: {
    card: "summary_large_image",
    title: "BANKR | Partner Deploy API",
    description:
      "Deploy tokens on behalf of your users via a single REST endpoint. Get your partner API key and start launching tokens.",
    images: ["/bnkr-api.png"],
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
