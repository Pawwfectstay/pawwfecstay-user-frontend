const Services = () => {
  const services = [
    { name: "Grooming", count: 32 },
    { name: "Veterinary Care", count: 25 },
    { name: "Training", count: 18 },
    { name: "Pet Transport", count: 15 },
    { name: "Day Care", count: 28 },
    { name: "Special Diet", count: 20 },
  ];

  return (
    <>
      {services.map((service) => (
        <div key={service.name} className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{service.name}</div>
            </div>
          </div>
          {/* End .col */}
          <div className="col-auto">
            <div className="text-15 text-light-1">{service.count}</div>
          </div>
        </div>
        /* End .row */
      ))}
    </>
  );
};

export default Services;
