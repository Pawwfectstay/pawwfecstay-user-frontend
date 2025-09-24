import { useNavigate } from "react-router-dom";
import { memo, useCallback, useState } from 'react';
import DateSearch from "../DateSearch";
import PetSearch from "./PetSearch";
import LocationSearch from "./LocationSearch";
import { shopsApi } from "../../../api/shops";

// Memoized search button component
const SearchButton = memo(({ onClick }) => (
  <button
    className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1"
    onClick={onClick}
  >
    <i className="icon-search text-20 mr-10" />
    Search
  </button>
));

const MainFilterSearchBox = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: '',
    start_date: '',
    end_date: ''
  });

  // Handle location selection
  const handleLocationSelect = (item) => {
    setSearchParams(prev => ({
      ...prev,
      location: item.name
    }));
  };

  // Handle date selection
  const handleDateSelect = (dates) => {
    setSearchParams(prev => ({
      ...prev,
      start_date: dates.start,
      end_date: dates.end
    }));
  };

  // Memoize search callback
  const handleSearch = useCallback(async () => {
    try {
      const results = await shopsApi.searchShops({
        start_date: searchParams.start_date,
        end_date: searchParams.end_date,
        location: searchParams.location
      });
      
      // Store results in state or context if needed
      // Navigate to results page with search parameters
      navigate('/tour-list-v2', { 
        state: { 
          searchResults: results,
          searchParams
        }
      });
    } catch (error) {
      console.error('Error searching shops:', error);
      // Handle error (show notification, etc.)
    }
  }, [navigate, searchParams]);
  return (
    <>
      <div className="mainSearch -w-900 z-2 bg-white pr-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1 mt-40">
        <div className="button-grid items-center">
          <LocationSearch onLocationSelect={handleLocationSelect} />
          {/* End Location */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Drop-off - Pick-up Dates
              </h4>
              <DateSearch onDateSelect={handleDateSelect} />
            </div>
          </div>
          {/* End check-in-out */}

          <PetSearch />
          {/* End guest */}

          <div className="button-item">
            <SearchButton onClick={handleSearch} />
          </div>
          {/* End search button_item */}
        </div>
      </div>
      {/* End .mainSearch */}
    </>
  );
};

export default memo(MainFilterSearchBox);
