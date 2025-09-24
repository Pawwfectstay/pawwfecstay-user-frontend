const Amenities = () => {
  const amenityOptions = [
    { label: "Air Conditioning", count: 35 },
    { label: "Webcam Access", count: 28 },
    { label: "Play Area", count: 25 },
    { label: "Grooming Station", count: 20 },
    { label: "Medical Support", count: 15 },
    { label: "24/7 Staff", count: 30 },
  ];

  return (
    <>
      {amenityOptions.map((option) => (
        <div className="row y-gap-10 items-center justify-between" key={option.label}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{option.label}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{option.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Amenities;
