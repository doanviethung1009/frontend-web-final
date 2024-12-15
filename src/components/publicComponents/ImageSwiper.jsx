import { Typography } from 'antd';
import '../../styles/publicStyles/ImageSwiper.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const { Title } = Typography;

const ImageSwiper = ({dataWiperImage}) => {
  return (
    <>
      <Swiper
        autoHeight={true}
        slidesPerView={2}
        spaceBetween={50}
        centeredSlides={true}
        navigation={true}
        modules={[ Autoplay, Navigation ]}
        lazy="true"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {dataWiperImage.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="container-swiper">  
              <img alt="avatar" src={item.src} className="carousel-image" loading="lazy" />  
              <div className="content">
                <Title level={4} style={{ marginBottom: "unset", color: 'white' }}>{item.first_title}</Title>
                <Title level={2} style={{ marginTop: "5px", color: 'white' }}>{item.second_title}</Title>
                <p>{item.content}</p>
                <p style={{ textAlign: 'right' }}>{item.footer_content}</p>
              </div>
            </div> 
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ImageSwiper