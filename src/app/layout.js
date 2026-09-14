import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Drevyqo Technologies | Full-Stack Development & Solutions",
    template: "%s | Drevyqo Technologies",
  },
  description: "Drevyqo Technologies builds high-performance, scalable web applications using Next.js, MongoDB, and Tailwind CSS.",
  keywords: ["Web Development", "Next.js Agency", "MongoDB", "Tailwind CSS", "Drevyqo Technologies", "Full-Stack Solutions"],
  authors: [{ name: "Drevyqo Technologies" }],
  creator: "Drevyqo Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drevyqotechnologies.com",
    title: "Drevyqo Technologies | Full-Stack Development",
    description: "Building scalable, high-performance web applications and custom digital products.",
    siteName: "Drevyqo Technologies",
    images: [
      {
        url: "/about-banner.svg",
        width: 1200,
        height: 630,
        alt: "Drevyqo Technologies Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drevyqo Technologies",
    description: "Building scalable full-stack digital solutions.",
    images: ["/about-banner.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}