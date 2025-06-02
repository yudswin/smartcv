"use client";

import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/shadcn/theme-provider";
import Header from "@/components/header";
import ToasterContext from "./context/toast-context";
import ScrollToTop from "@/components/scroll-to-top";
import Lines from "@/components/lines/lines";
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${poppins.className} antialiased`} >
        <Provider store={store}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Lines />
            <Header />
            <ToasterContext />
            {children}
            {/* <Analytics /> */}
            <ScrollToTop />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  )
}
