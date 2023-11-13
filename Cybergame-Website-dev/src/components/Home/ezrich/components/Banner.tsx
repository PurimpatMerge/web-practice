import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

import { imageList } from '@/components/Home/ezrich/configs/images'
import { TextSlide } from '@/components/Home/ezrich/styled'

const Banner = () => {
  return (
    <div className="mt-12">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          989: {
            slidesPerView: 2.1,
          },
          767: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay]}>
        {Object.values(imageList.home.banner).map((imagePath, index) => (
          <SwiperSlide key={index}>
            <img src={imagePath} alt={`banner ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-2 md:gap-4 mt-6 mx-6">
        {Object.values(imageList.home.banner2).map((item, index) => (
          <img className="w-1/4 h-auto hover:scale-[101%]" key={index} src={item} alt={`Label ${item}`} />
        ))}
      </div>
      <TextSlide className="mx-6">
        <p className="text-sm md:text-base">คาสิโนออนไลน์ สล็อตออนไลน์ ที่ให้คุณสนุกได้ทุกรูปแบบ</p>
      </TextSlide>
    </div>
  )
}

export default Banner
