import { memo, useMemo } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCards } from "swiper";
import { testimonial2 } from "../../../data/testimonialData";

// Memoized testimonial card component
const TestimonialCard = memo(({ item }) => (
  <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40 shadow-2">
    <div>
      <h4 className="text-16 fw-500 text-blue-1 mb-20">{item.meta}</h4>
      <p className="testimonials__text lh-18 fw-500 text-dark-1">{item.text}</p>
      <div className="pt-20 mt-28 border-top-light">
        <div className="row x-gap-20 y-gap-20 items-center">
          <div className="col-auto">
            <img src={item.avatar} alt={item.name} />
          </div>
          <div className="col-auto">
            <div className="text-15 fw-500 lh-14">{item.name}</div>
            <div className="text-14 lh-14 text-light-1 mt-5">{item.designation}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

// Memoized navigation buttons
const NavigationButtons = memo(() => (
  <div className="d-flex x-gap-15 items-center justify-center pt-30">
    <div className="col-auto">
      <button className="d-flex items-center text-24 arrow-left-hover text-white js-prev_active">
        <i className="icon icon-arrow-left" />
      </button>
    </div>
    <div className="col-auto">
      <div className="pagination -dots text-white-50 js-pagination" />
    </div>
    <div className="col-auto">
      <button className="d-flex items-center text-24 arrow-right-hover text-white js-next_active">
        <i className="icon icon-arrow-right" />
      </button>
    </div>
  </div>
));

const Testimonial = () => {
  // Memoize testimonial data
  const testimonialData = useMemo(() => testimonial2.slice(0, 3), []);

  // Memoize Swiper config
  const swiperConfig = useMemo(() => ({
    effect: "cards",
    grabCursor: true,
    modules: [EffectCards, Navigation, Pagination],
    navigation: {
      nextEl: ".js-next_active",
      prevEl: ".js-prev_active",
    },
    pagination: {
      el: ".js-pagination",
      clickable: true,
    },
  }), []);
  return (
    <>
      <div className="testimonials-slider-2 js-testimonials-slider-2">
        <Swiper {...swiperConfig}>
          {testimonial2.slice(0, 3).map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* End swiper-wrapper */}

        <NavigationButtons />
      </div>
    </>
  );
};

export default memo(Testimonial);
