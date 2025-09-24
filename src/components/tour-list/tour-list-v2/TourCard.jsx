import { memo } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import isTextMatched from "../../../utils/isTextMatched";

const TourCard = ({ item }) => {
  const lowestPrice = item.roomTypes.length > 0
    ? Math.min(...item.roomTypes.map(type => type.price))
    : 0;

  return (
    <Link
      to={`/tour-single/${item.id}`}
      className="tourCard -type-1 rounded-4 position-relative"
    >
      <div className="tourCard__image">
        <div className="cardImage ratio ratio-1:1">
          <div className="cardImage__content">
            <div className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
              <Swiper
                className="mySwiper"
                modules={[Pagination, Navigation]}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
              >
                {item.roomTypes[0]?.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img
                      className="rounded-4 col-12 js-lazy"
                      src={image}
                      alt={`${item.name} - Image ${i + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="cardImage__wishlist">
          <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
            <i className="icon-heart text-12" />
          </button>
        </div>

        <div className="cardImage__leftBadge">
          <div className="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-blue-1 text-white">
            {item.roomTypes.length} Room Types
          </div>
        </div>
      </div>

      <div className="tourCard__content mt-10">
        <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
          <span>{item.name}</span>
        </h4>
        <p className="text-light-1 lh-14 text-14 mt-5">
          {item.location}
        </p>

        <div className="row justify-between items-center pt-15">
          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="text-14 text-light-1">
                Available Rooms: {item.roomTypes.reduce((total, type) => total + type.availableRooms, 0)}
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-14 text-light-1">
              From
              <span className="text-16 fw-500 text-dark-1">
                {" "}
                RM {lowestPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(TourCard);
