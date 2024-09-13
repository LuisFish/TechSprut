import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {} from "../styles/services.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import swiper1 from "../assets/img/swiper1.jpg";
import swiper2 from "../assets/img/swiper2.jpg";
import swiper3 from "../assets/img/swiper3.jpg";
import swiper4 from "../assets/img/swiper4.jpg";

export default function Services() {
  return (
    <div>
      <div className="container-services">
        <h2 className="title-services">SERVICIOS</h2>
        <span className="text-services">
          En TechSprout, ofrecemos soluciones digitales personalizadas para
          ayudarte a crecer en el mundo digital. Nuestro enfoque está en
          entender tus necesidades y traducirlas en productos tecnológicos que
          impulsan tu negocio.
        </span>
      </div>

      <div className="container-swiper">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper swiper-services"
        >
          <SwiperSlide className="swiper-slide">
            <div className="container-text-white">
              <h2 className="title-white">Desarrollo Web Personalizado</h2>
              <span className="text-white">
                Creamos sitios web a medida que se adaptan a tus objetivos y
                visión. Ya sea un sitio corporativo, un blog, o una tienda en
                línea, nos aseguramos de que tu presencia en la web sea única,
                eficiente y atractiva.
              </span>
            </div>
            <img src={swiper1} alt="img swiper" className="img-swiper" />
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="container-text-white">
              <h2 className="title-white">Diseño UI / UX</h2>
              <span className="text-white">
                Diseñamos experiencias de usuario intuitivas y atractivas. Nos
                enfocamos en crear interfaces que no solo sean visualmente
                impactantes, sino que también proporcionen una navegación fluida
                y una interacción agradable para tus usuarios.
              </span>
            </div>
            <img src={swiper2} alt="img swiper" className="img-swiper" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="container-text-white">
              <h2 className="title-white">Consultoría Tecnológica</h2>
              <span className="text-white">
                Te ayudamos a tomar decisiones tecnológicas informadas.
                Analizamos tus necesidades y te asesoramos sobre las mejores
                herramientas, plataformas y prácticas para garantizar que tu
                proyecto sea escalable, seguro y alineado con tus objetivos de
                negocio.
              </span>
            </div>
            <img src={swiper3} alt="img swiper" className="img-swiper" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="container-text-white">
              <h2 className="title-white">Mantenimiento y Soporte Continuo</h2>
              <span className="text-white">
                No solo desarrollamos tu sitio, también nos encargamos de
                mantenerlo funcionando de manera óptima. Ofrecemos planes de
                mantenimiento y soporte para asegurarnos de que tu presencia en
                línea siga siendo relevante y efectiva.
              </span>
            </div>
            <img src={swiper4} alt="img swiper" className="img-swiper" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
