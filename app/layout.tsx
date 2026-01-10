import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Oskar Michowicz | Online Fitness Coach",
  description: "Personalized training, sustainable nutrition, and proven systems designed to help you build strength, lose fat, and stay consistent.",
  openGraph: {
    title: "Oskar Michowicz | Online Fitness Coach",
    description: "Transform your body with personalized training and nutrition systems. No crash diets, just results.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oskar Michowicz | Online Fitness Coach",
    description: "Personalized training, sustainable nutrition, and proven systems.",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
