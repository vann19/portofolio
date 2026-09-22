import type { Metadata } from "next";
import { Inter, Fira_Code, Poppins } from "next/font/google";
import "./globals.css";
import AOSProvider from "./components/AOSProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description:
    "Modern portfolio showcasing web development projects and skills. Specialized in React, Next.js, and full stack development.",
  keywords: ["portfolio", "web developer", "frontend", "fullstack", "React", "Next.js"],
  authors: [{ name: "Developer" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Portfolio | Full Stack Developer",
    description: "Modern portfolio showcasing web development projects and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} ${poppins.variable}`}>
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
