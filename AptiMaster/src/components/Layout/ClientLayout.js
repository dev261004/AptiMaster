"use client"; // Make it a client component

import { usePathname } from "next/navigation";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname(); // Get current route

  return (
    <>
      {/* Show Header & Footer on all pages except "/practice" */}
      {pathname !== "/practice" && <Header />}

      <main className="container mx-auto px-6">{children}</main>

      {pathname !== "/practice" && <Footer />}
    </>
  );
}
