import { useMemo } from 'react';
import toursData from "../../../data/tours";
import TourCard from './TourCard';
import { useFilteredData, useSortedData } from '../../../utils/optimizationHooks';

const TourProperties = ({ filters, sortConfig }) => {
  // Memoize the initial data slice
  const initialTours = useMemo(() => toursData.slice(0, 9), []);

  // Apply filters and sorting with memoization
  const filteredTours = useFilteredData(initialTours, filters);
  const sortedTours = useSortedData(filteredTours, sortConfig);

  return (
    <>
      {sortedTours.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <TourCard item={item} />
        </div>
      ))}
    </>
  );
};

export default TourProperties;
