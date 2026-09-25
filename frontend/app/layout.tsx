import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://abbas-portfolio-beta.vercel.app";
const SITE_TITLE = "Abbas Hussain | Full-Stack Developer | AI & Web3";
const SITE_DESCRIPTION =
  "Full-Stack Developer from Pakistan building AI-powered products and secure Web3 tools.";
const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Abbas Hussain â Full-Stack Developer, AI & Web3",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Abbas Hussain",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Abbas Hussain Portfolio",
  keywords: [
    "Abbas Hussain",
    "Full-Stack Developer",
    "AI Developer",
    "Web3 Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Pakistan developer",
    "junior developer",
    "internship",
  ],
  authors: [{ name: "Abbas Hussain", url: "https://github.com/AbbasFullstack" }],
  creator: "Abbas Hussain",
  publisher: "Abbas Hussain",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Abbas Hussain",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewp
ort = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abbas Hussain",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/Abbasdev.png`,
  knowsAbout: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Web3", "AI"],
  sameAs: [
    "https://github.com/AbbasFullstack",
    "https://www.linkedin.com/in/abbas-hussain-56a61338b/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </body>
    </html>
  );
}

