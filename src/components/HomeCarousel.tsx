import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "./Carusel/steyle.css";
// @ts-ignore
import "swiper/css"
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore

const HomeCarousel = () => {
  const banners = [
    "https://www.digitaltrends.com/uploads/2023/02/macbook-pro-14-m2-max.jpg?p=1",
    "https://strgimgr.umico.az/sized/840/406704-b28f63e1c4c0320bde54ff70e27a2f37.jpg",
    "https://tse4.mm.bing.net/th/id/OIP.CFXabGxwqF15zBkIZiiG-QHaEK?pid=Api&P=0&h=220",
  ]

  return (
    <div className="px-6 py-6">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2500 }}
        loop
        spaceBetween={20}
        slidesPerView={1}
      >
        {banners.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              className="w-full h-55 md:h-75 object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HomeCarousel
