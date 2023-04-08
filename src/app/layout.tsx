import "@/styles/globals.css"
import { Metadata } from "next"
import { Archivo, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "Coobo Media Template",
    template: "%s | Coobo Media Template",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={cn(
        archivo.variable,
        roboto.variable,
        "scroll-smooth font-sans antialiased"
      )}
      lang="en"
    >
      <body className="min-h-screen bg-white  ">
        {children}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
