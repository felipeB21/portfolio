import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://felipebolgar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Felipe Bolgar - Full Stack Developer",
    template: "%s - Felipe Bolgar",
  },
  description:
    "Argentine full-stack developer building SaaS products and developer tools with Next.js, TypeScript, and PostgreSQL.",
  keywords: [
    "Felipe Bolgar",
    "full-stack developer",
    "Next.js developer",
    "TypeScript",
    "SaaS",
    "web developer Argentina",
    "software engineer",
    "Drizzle ORM",
    "PostgreSQL",
  ],
  authors: [{ name: "Felipe Bolgar", url: BASE_URL }],
  creator: "Felipe Bolgar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Felipe Bolgar",
    title: "Felipe Bolgar - Full Stack Developer",
    description:
      "Argentine full-stack developer building SaaS products and developer tools with Next.js, TypeScript, and PostgreSQL.",
    images: [{ url: "/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Bolgar — Full Stack Developer",
    description:
      "Argentine full-stack developer building SaaS products and developer tools with Next.js, TypeScript, and PostgreSQL.",
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        "font-sans",
        inter.className,
      )}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="max-w-2xl my-2 m-auto p-5">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
