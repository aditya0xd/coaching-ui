import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Samuel Fernandez | Online Fitness Coach",
  description:
    "Personalized training, sustainable nutrition, and proven systems designed to help you build strength, lose fat, and stay consistent.",
  openGraph: {
    title: "Anthony Bell | Online Fitness Coach",
    description:
      "Transform your body with personalized training and nutrition systems. No crash diets, just results.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Fernandez | Online Fitness Coach",
    description:
      "Personalized training, sustainable nutrition, and proven systems.",
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:border focus:border-accent focus:rounded-md shadow-2xl font-bold transition-all"
          >
            Skip to content
          </a>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Samuel Fernandez",
                jobTitle: "Online Fitness Coach",
                description:
                  "Personalized training and nutrition systems for busy professionals.",
                url: "https://coaching-ui-b8qk.vercel.app",
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
