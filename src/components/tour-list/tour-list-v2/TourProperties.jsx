import { useMemo } from 'react';
import TourCard from './TourCard';
import { useLocation } from 'react-router-dom';

const TourProperties = ({ filters, sortConfig }) => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  // Memoize the shop data
  const shopData = useMemo(() => {
    return searchResults.map(shop => ({
      id: shop.shop_id,
      name: shop.name,
      location: `${shop.address}, ${shop.city}, ${shop.state}`,
      roomTypes: shop.room_types.map(type => ({
        id: type.room_type_id,
        type: type.type,
        price: type.price,
        description: type.description,
        maxOccupancy: type.max_occupancy,
        availableRooms: type.available_rooms,
        images: type.images
      }))
    }));
  }, [searchResults]);

  return (
    <>
      {shopData.map((shop) => (
        <div
          className="col-lg-4 col-sm-6"
          key={shop.id}
          data-aos="fade"
        >
          <TourCard item={shop} />
        </div>
      ))}
    </>
  );
};

export default TourProperties;
