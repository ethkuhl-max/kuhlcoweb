import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://kuhlman.co"),
  title: "Kuhlman — Building things that work",
  description:
    "Kuhlman.co — the portfolio and work of Ethan Kuhlman: product, engineering, and the systems in between.",
  openGraph: {
    title: "Kuhlman",
    description: "Product, engineering, and the systems in between.",
    url: "https://kuhlman.co",
    siteName: "Kuhlman",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-ink font-sans text-paper antialiased">{children}</body>
    </html>
  );
}
