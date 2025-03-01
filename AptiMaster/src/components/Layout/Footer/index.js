"use client"
import Link from "next/link"
import Image from "next/image"
import { Icon } from "@iconify/react/dist/iconify.js"
import { usePathname } from "next/navigation"

const products = [
  {
    id: 1,
    section: "Company",
    link: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"]
  },
  {
    id: 2,
    section: "Support",
    link: [
      "Help center",
      "Terms of service",
      "Legal",
      "Privacy Policy",
      "Status"
    ]
  }
]

const Footer = () => {
  const pathUrl = usePathname();
  if (pathUrl === "/practice") {
    return null;
  }
  return (
    <div className="bg-primary" id="first-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md pt-64 px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className="col-span-4">
            <Link href="/">
              <Image
                src="/images/logo/logo2.svg"
                alt="Logo"
                width={48}
                height={64}
              />
            </Link>
            <h3 className="text-white text-lg font-medium leading-9 mb-4 lg:mb-20 mt-5">
              {" "}
              Level up your skills, and get dream <br /> job with passion.{" "}
            </h3>
            <div className="flex gap-4">
              <Link
                href="/"
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-instagram"
                  className="text-2xl inline-block"
                />
              </Link>
              <Link
                href="/"
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-dribbble"
                  className="text-2xl inline-block"
                />
              </Link>
              <Link
                href="/"
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-twitter-filled"
                  className="text-2xl inline-block"
                />
              </Link>
              <Link
                href="/"
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-youtube-filled"
                  className="text-2xl inline-block"
                />
              </Link>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map(product => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-semibold mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link, index) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-white/60 hover:text-white text-sm font-normal mb-6"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CLOUMN-4 */}

          <div className="col-span-4">
            <h3 className="text-white text-xl font-semibold mb-6">
              Stay up to date
            </h3>
            <div className="relative text-white focus-within:text-white flex flex-row-reverse">
              <input
                type="Email address"
                name="q"
                className="py-4 text-sm w-full text-white bg-white/15 rounded-md pl-4 focus:outline-none bg-emailbg focus:text-white"
                placeholder="Your email address"
                autoComplete="off"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <Icon
                    icon="tabler:send"
                    className="text-white text-2xl inline-block me-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* All Rights Reserved */}
      <div className="py-8 px-4">
        <h3 className="text-center text-white/60">
          @2025 - All Rights Reserved by{" "}
          <Link
            href="https://adminmart.com/"
            target="_blank"
            className="hover:text-white"
          >
            {" "}
            AptiMaster.com
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default Footer
