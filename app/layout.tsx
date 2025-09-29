import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/site/Navbar"
import Footer from "@/components/site/Footer"
import { Providers } from "./providers"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: "Integritrade LLC",
  description: "Professional ITAD & Electronic Recycling Services",
  icons: {
    icon: "/logo.png"
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#000",
                color: "#fff",       
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
