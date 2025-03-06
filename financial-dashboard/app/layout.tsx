import type React from "react"
import "./globals.css"
import { Inter, Outfit, Roboto_Mono } from "next/font/google"
import { Navigation } from "@/components/Navigation"

// Define fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

export const metadata = {
  title: "Finance Tracker",
  description: "Track your finances with ease",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${robotoMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  )
}



import './globals.css'