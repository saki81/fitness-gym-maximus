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
     default: "Maximus Gym | Teretana i fitness",
     template: "%s | Maximus Gym",

  },

  description: "Maximus Gym je teretana za trening snage, fitness i izgradnju mišića. Trenirajte u modernom prostoru i ostvarite svoje fitness ciljeve.",

  keywords: [ "teretana", "fitness", "gym", "trening", "trening snage", "fitness centar", ],

  openGraph: {
    type: "website",
    locale: "bs_BA",
    title: "Fitnes centar Maksimus| Teretana i fitness", 
    description: "Teretana za trening snage, kondicije, fitnesa i ostvarivanje vaših ciljeva.",
  },

  robots: { index: true, follow: true, },

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
