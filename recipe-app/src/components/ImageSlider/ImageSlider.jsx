import { Box, Image } from "@chakra-ui/react";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/food.jpg";
import img3 from "../../assets/food2.jpg";
import img6 from "../../assets/food3.jpg";
import img8 from "../../assets/food4.jpg";
import "./styles.css";

const ImageSlider2 = () => {
  return (
    <Box w={"100%"} h='auto' mt={2}>
      {" "}
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box className="image-slide-container">
            <Image src={img1} alt="Food" className="image-slide" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="image-slide-container">
            <Image src={img3} alt="Food" className="image-slide" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="image-slide-container">
            <Image src={img6} alt="Food" className="image-slide" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="image-slide-container">
            <Image src={img8} alt="Food" className="image-slide" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ImageSlider2;
