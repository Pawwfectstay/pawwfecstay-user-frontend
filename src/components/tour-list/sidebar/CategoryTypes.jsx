const CategoryTypes = () => {
  const roomTypes = [
    { name: "Basic Room", count: 15 },
    { name: "Premium Suite", count: 8 },
    { name: "Luxury Suite", count: 5 },
    { name: "Cat Condo", count: 12 },
    { name: "Group Play Area", count: 6 },
  ];

  return (
    <>
      {roomTypes.map((type) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={type.name}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{type.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{type.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryTypes;
