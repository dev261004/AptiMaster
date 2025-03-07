import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import { ThemeProvider } from "next-themes"
import ScrollToTop from "@/components/ScrollToTop"
import Aoscompo from "@/utils/aos"
import ClientLayout from "@/components/Layout/ClientLayout"; 
const font = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Aoscompo>
            <Header />
            
            {children}
             
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
