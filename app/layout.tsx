import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Credex AI Spend Audit",
  description:
    "Discover hidden savings across ChatGPT, Claude, Cursor, Gemini, and other AI tools.",

  openGraph: {
    title: "Credex AI Spend Audit",
    description:
      "Analyze your startup's AI spending and uncover hidden savings instantly.",
    url: "https://credex-audit.vercel.app",
    siteName: "Credex AI Audit",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Credex AI Spend Audit",
    description:
      "Stop overpaying for AI subscriptions and optimize your stack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="bg-black text-white antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}