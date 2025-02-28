"use client"
import React from "react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { TestimonialData } from "@/app/api/data"

// CAROUSEL SETTINGS

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  return (
    <section className="bg-cream">
      <div
        id="testimonial-section"
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4"
      >
        <div className="sm:flex justify-between items-center pb-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
            What Our Happy <br /> Students Says
          </h2>
          <div>
            <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-3 px-4 border border-primary hover:border-transparent rounded duration-300">
              Give Your Review
            </button>
          </div>
        </div>
        <p className="text-lg font-medium text-gray-900 pb-12">
          Build skills with our courses and mentor from world-class companies.
        </p>
        <Slider {...settings}>
          {TestimonialData.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg">
                <div className="relative z-0 flex justify-center items-center before:absolute before:bg-[url('/images/testimonial/greenpic.svg')] before:h-6 before:w-6 before:bottom-0 before:z-10 before:left-54%">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={64}
                    height={64}
                    className="inline-block rounded-full ring-2 ring-white relative"
                  />
                </div>
                <h3 className="text-sm pt-4 pb-2">{items.profession}</h3>
                <h4 className="text-2xl font-semibold pb-3">{items.name}</h4>
                <img
                  src={items.starimg}
                  alt="stars-img"
                  className="m-auto pb-6"
                />
                <p className="text-lg font-medium leading-9">{items.detail}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial
