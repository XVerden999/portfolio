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
  title: "Nicholis Grobler Portfolio",
  description: "The Portfolio of Developer, Entrepreneur and Student Nicholis Grobler!",
  icons: {
      icon: '/xvNewRound.png',
    },

  openGraph: {
      title: 'Nicholis Grobler Portfolio',
      description: 'The Portfolio of Developer, Entrepreneur and Student Nicholis Grobler!',
      url: 'https://nicholis-grobler.xverden.com/',
      siteName: 'Nicholis Grobler Portfolio',
      images: [
        {
          url: 'https://nicholis-grobler.xverden.com/xvNew.png',
          width: 1200,
          height: 630,
          alt: 'XVerden Logo!',
        },
      ],
      type: 'website',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
