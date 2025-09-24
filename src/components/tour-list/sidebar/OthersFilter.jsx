const OthersFilter = () => {
  const petTypes = [
    { name: "Dogs", count: 45 },
    { name: "Cats", count: 38 },
    { name: "Small Animals", count: 15 },
    { name: "Birds", count: 8 },
  ];
  return (
    <>
      {petTypes.map((item) => (
        <div className="row y-gap-10 items-center justify-between" key={item.name}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{item.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{item.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OthersFilter;
