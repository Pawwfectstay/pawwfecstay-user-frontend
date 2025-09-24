import { useState } from "react";

const LocationSearch = ({ onLocationSelect }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const locationSearchContent = [
    {
      id: 1,
      name: "Pet Safari - Sunway Pyramid",
      address: "F1.01A, First Floor, Sunway Pyramid, Bandar Sunway, 47500 Petaling Jaya, Selangor",
    },
    {
      id: 2,
      name: "Pet Lovers Centre - Mid Valley Megamall",
      address: "Lot T-012A, 3rd Floor, Mid Valley Megamall, Lingkaran Syed Putra, 59200 Kuala Lumpur",
    },
    {
      id: 3,
      name: "Animal Medical Centre",
      address: "26, Jalan SS 2/103, SS 2, 47300 Petaling Jaya, Selangor",
    },
    {
      id: 4,
      name: "Pets Wonderland - Bangsar",
      address: "29, Jalan Telawi 3, Bangsar Baru, 59100 Kuala Lumpur",
    },
    {
      id: 5,
      name: "Healing Pets Animal Clinic",
      address: "30, Jalan SS 21/35, Damansara Utama, 47400 Petaling Jaya, Selangor",
    },
    {
      id: 6,
      name: "Paws & Claws Veterinary Clinic",
      address: "G-7, Plaza Damas 3, 63, Jalan Sri Hartamas 1, 50480 Kuala Lumpur",
    },
    {
      id: 7,
      name: "Pet Family Veterinary Clinic",
      address: "19, Jalan PJU 5/20D, Kota Damansara, 47810 Petaling Jaya, Selangor",
    },
    {
      id: 8,
      name: "Petzone Veterinary Clinic",
      address: "32G, Jalan Radin Anum 1, Sri Petaling, 57000 Kuala Lumpur",
    }
  ];

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
    onLocationSelect?.({ name: item.name });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setSelectedItem(null);
    onLocationSelect?.({ name: value });
  };

  return (
    <>
      <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <h4 className="text-15 fw-500 ls-2 lh-16">Location</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder="Find a pet boarding near you"
              className="js-search js-dd-focus"
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {locationSearchContent.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? "active" : ""
                  }`}
                  key={item.id}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item.name}
                      </div>
                      <div className="text-14 lh-12 text-light-1 mt-5">
                        {item.address}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSearch;
