import "./globals.css";
import type { Metadata } from "next";
import { Geist, Montserrat } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMontserrat = Montserrat({
  variable: "--font-geist-montserrat",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Teretana Teslić | Fitness Centar Maximus",
    template: "%s | Fitness Centar Maximus",
  },

  description:
    "Fitness Centar Maximus je teretana u Tesliću, smještena u Sportskoj dvorani Radolinka. Trenirajte uz kvalitetnu opremu za trening snage, rekreaciju i kondiciju.",

  keywords: [
    "teretana Teslić",
    "gym Teslić",
    "fitness Teslić",
    "Fitness Centar Maximus",
    "teretana",
    "trening snage",
    "rekreacija",
    "kondicija",
  ],

  openGraph: {
    type: "website",
    locale: "bs_BA",
    title: "Teretana Teslić | Fitness Centar Maximus",
    description:
      "Fitness Centar Maximus je teretana u Tesliću za trening snage, rekreaciju i poboljšanje kondicije.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html lang="en" suppressHydrationWarning >
      <body
        suppressHydrationWarning 
        className={`${geistSans.variable} ${geistMontserrat.variable} antialiased`}>
         
        <ThemeProvider
             attribute="class"
             defaultTheme="light"
             enableSystem
             disableTransitionOnChange >
              
              <Navbar />  
              
               {children}
               
              <Footer />
         </ThemeProvider> 
       
      </body>
    </html>     
  );
}
