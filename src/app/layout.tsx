import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import GlobalClientEffects from "@/components/GlobalClientEffects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

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
  metadataBase: new URL("https://orthoxray.ro"),
  title: {
    default: "Ortho X-Ray Clinic – Radiologie, Ortopedie și Specialități Medicale în București",
    template: "%s | Ortho X-Ray Clinic",
  },
  description:
    "Clinică medicală multidisciplinară în București, cu servicii de radiologie digitală, ortopedie, cardiologie, dermatologie, reumatologie și chirurgie plastică. Programări rapide și aparatură modernă.",
  keywords: [
    "clinică medicală București",
    "radiologie digitală",
    "ortopedie București",
    "cardiologie București",
    "dermatologie București",
    "ecografie București"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ortho X-Ray Clinic – Radiologie și Specialități Medicale în București",
    description:
      "Radiologie digitală, ortopedie, cardiologie, dermatologie, reumatologie și chirurgie plastică. Servicii medicale moderne în București.",
    type: "website",
    locale: "ro_RO",
    url: "https://orthoxray.ro",
    siteName: "Ortho X-Ray Clinic",
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Ortho X-Ray Clinic",
  "image": "https://orthoxray.ro/images/clinic.jpeg",
  "url": "https://orthoxray.ro",
  "telephone": "+40756161205",
  "email": "contact@orthoxray.ro",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bd Gheorghe Șincai 16",
    "addressLocality": "București",
    "addressRegion": "Sector 4",
    "postalCode": "040441",
    "addressCountry": "RO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.4217,
    "longitude": 26.1109
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "19:00"
    }
  ],
  "medicalSpecialty": [
    "Radiography",
    "Orthopedic",
    "Cardiovascular",
    "Dermatologic",
    "Rheumatologic",
    "PlasticSurgery"
  ],
  "priceRange": "$$",
  "description":
    "Clinică medicală multidisciplinară în București, cu servicii de radiologie digitală, ortopedie, cardiologie, dermatologie, reumatologie și chirurgie plastică."
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

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
          <Analytics />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

