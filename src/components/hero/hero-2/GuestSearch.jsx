import React, { useState } from "react";

const petTypes = [
  { name: "Cats", description: "Feline companions" },
  { name: "Dogs", description: "Canine friends" },
  { name: "Others", description: "Other small pets" },
];

const PetCounter = ({ name, description, count, onCountChange }) => {
  const incrementCount = () => {
    onCountChange(name, count + 1);
  };
  
  const decrementCount = () => {
    if (count > 0) {
      onCountChange(name, count - 1);
    }
  };

  return (
    <>
      <div className="row y-gap-10 justify-between items-center">
        <div className="col-auto">
          <div className="text-15 lh-12 fw-500">{name}</div>
          {description && (
            <div className="text-14 lh-12 text-light-1 mt-1">{description}</div>
          )}
        </div>
        <div className="col-auto">
          <div className="d-flex items-center">
            <button
              className="button -outline-blue-1 text-blue-1 size-38 rounded-4"
              onClick={decrementCount}
              disabled={count === 0}
            >
              <i className="icon-minus text-12" />
            </button>
            <div className="flex-center size-20 mx-15">
              <div className="text-15">{count}</div>
            </div>
            <button
              className="button -outline-blue-1 text-blue-1 size-38 rounded-4"
              onClick={incrementCount}
            >
              <i className="icon-plus text-12" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-top-light mt-20 mb-20" />
    </>
  );
};

const GuestSearch = () => {
  const [petCounts, setPetCounts] = useState({
    Cats: 0,
    Dogs: 0,
    Others: 0,
  });

  const handleCountChange = (petType, newCount) => {
    setPetCounts(prev => ({
      ...prev,
      [petType]: Math.max(0, newCount) // Ensure count doesn't go below 0
    }));
  };

  const totalPets = Object.values(petCounts).reduce((sum, count) => sum + count, 0);

  const getPetSummary = () => {
    if (totalPets === 0) return 'No pets';
    
    const parts = [];
    if (petCounts.Cats > 0) {
      parts.push(`${petCounts.Cats} cat${petCounts.Cats !== 1 ? 's' : ''}`);
    }
    if (petCounts.Dogs > 0) {
      parts.push(`${petCounts.Dogs} dog${petCounts.Dogs !== 1 ? 's' : ''}`);
    }
    if (petCounts.Others > 0) {
      parts.push(`${petCounts.Others} other${petCounts.Others !== 1 ? 's' : ''}`);
    }
    
    return parts.join(' • ');
  };

  return (
    <div className="searchMenu-guests px-30 lg:py-20 lg:px-0 js-form-dd js-form-counters position-relative">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
        data-bs-offset="0,22"
      >
        <h4 className="text-15 fw-500 ls-2 lh-16">Pets</h4>
        <div className="text-15 text-light-1 ls-2 lh-16">
          {getPetSummary()}
        </div>
      </div>

      <div className="shadow-2 dropdown-menu min-width-400">
        <div className="bg-white px-30 py-30 rounded-4">
          {petTypes.map((pet) => (
            <PetCounter
              key={pet.name}
              name={pet.name}
              description={pet.description}
              count={petCounts[pet.name] || 0}
              onCountChange={handleCountChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestSearch;
