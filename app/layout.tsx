import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ccff00",
};

export const metadata: Metadata = {
  title: "Rewound | Full-Stack Developer",
  description:
    "Rewound - Full-Stack Developer & Software Engineer. Building clean, modern web and mobile applications with React, Next.js, and TypeScript.",
  keywords: [
    // Brand
    "Rewound",
    "Rewound Developer",
    "Rewound Portfolio",
    // Job Titles
    "Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    // Technologies
    "React",
    "React Developer",
    "Next.js",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "React Native",
    "Tailwind CSS",
    // Skills
    "Web Development",
    "Mobile Development",
    "UI/UX",
    "Clean Code",
    "Software Architecture",
    // Location
    "Istanbul",
    "Turkey",
    "Türkiye",
    // Turkish alternatives
    "Yazılım Geliştirici",
    "Yazılım Mühendisi",
    "Web Geliştirici",
    "Mobil Geliştirici",
  ],
  authors: [{ name: "Rewound" }],
  creator: "Rewound",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rewound Portfolio",
    title: "Rewound | Full-Stack Developer",
    description:
      "Full-Stack Developer & Software Engineer. Building clean, modern web and mobile applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewound | Developer",
    description:
      "Full-Stack Developer & Software Engineer. Building clean, modern web and mobile applications.",
    creator: "@rewound",
  },
  robots: {
    index: true,
    follow: true,
  },
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
