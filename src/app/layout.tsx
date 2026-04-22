import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import GlobalClientEffects from "@/components/GlobalClientEffects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Raleway } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Ortho X-Ray Clinic - Îngrijire Medicală Profesionistă",
  description: "Oferim servicii medicale complete de ortopedie, cardiologie, radiologie și reumatologie. Medici cu experiență într-un mediu modern și sigur.",
  keywords: ["clinică medicală", "ortopedie", "cardiologie", "radiologie", "București", "România"],
  openGraph: {
    title: "Ortho X-Ray Clinic",
    description: "Îngrijire medicală profesionistă pentru o viață mai sănătoasă.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={`
          ${raleway.variable}
          antialiased 
          bg-[oklch(0.98_0.01_260)] 
          dark:bg-[oklch(0.12_0.02_260)]
          font-sans
        `}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingButtons />
          <GlobalClientEffects />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

