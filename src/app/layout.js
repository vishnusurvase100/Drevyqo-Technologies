import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // Apne path ke hisab se check kar lena
import Footer from "@/components/layout/Footer"; // Apne path ke hisab se check kar lena

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Drevyyqo Technologies | Full-Stack Development & Solutions",
    template: "%s | Drevyyqo Technologies",
  },
  description: "Drevyyqo Technologies builds high-performance, scalable web applications using Next.js, MongoDB, and Tailwind CSS.",
  keywords: ["Web Development", "Next.js Agency", "MongoDB", "Tailwind CSS", "Drevyyqo Technologies", "Full-Stack Solutions"],
  authors: [{ name: "Drevyyqo Technologies" }],
  creator: "Drevyyqo Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drevyyqotechnologies.com",
    title: "Drevyyqo Technologies | Full-Stack Development",
    description: "Building scalable, high-performance web applications and custom digital products.",
    siteName: "Drevyyqo Technologies",
    images: [
      {
        url: "/about-banner.svg",
        width: 1200,
        height: 630,
        alt: "Drevyyqo Technologies Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drevyyqo Technologies",
    description: "Building scalable full-stack digital solutions.",
    images: ["/about-banner.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900 antialiased flex flex-col min-h-screen`}>
        {/* Global Navbar */}
        <Navbar />

        {/* Dynamic Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}