import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://abbas-portfolio-beta.vercel.app";
const SITE_TITLE = "Abbas Hussain | Full-Stack Developer | Web3 & AI";
const SITE_DESCRIPTION =
  "I build secure, data-driven web applications with Next.js, React, TypeScript, Supabase, and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Abbas Hussain",
  },
  description: SITE_DESCRIPTION,
  keywords: ["Full-Stack Developer", "Web3", "AI", "Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
  authors: [{ name: "Abbas Hussain", url: "https://github.com/AbbasFullstack" }],
  creator: "Abbas Hussain",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Abbas Hussain",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/Abbasdev.png",
        alt: "Portrait of Abbas Hussain, full-stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/Abbasdev.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
