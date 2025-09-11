import type { Metadata } from "next";
// import LocalFont from "next/font/local";
import { Exo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Toaster } from "sonner";
// const myFont = LocalFont({
//   src: "../../public/font/NeuropoliticalRg.otf"
// })

const myFont = Exo({
  variable: "--font-exo",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FeelDive Diving Center",
  description: "Il punto di riferimento per le tue immersioni in Maremma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${myFont.className} antialiased w-full h-full bg-background scroll-smooth`}
      >
        <a
          href="#main-content"
          tabIndex={0}
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:outline-2 focus:outline-blue-500 focus:rounded"
        >
          Vai al contenuto
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content" className="flex min-h-screen flex-col ">
            {children}
          </main>
          <BackToTop />
          <Toaster richColors position="top-center" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
