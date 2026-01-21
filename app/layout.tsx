import type { Metadata } from "next";
import { Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "600", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "REWOUND | Software Engineer",
  description: "Senior Full-Stack Developer obsessed with clean architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${spaceMono.variable} antialiased`}
      >
        {/* Noise Overlay */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
