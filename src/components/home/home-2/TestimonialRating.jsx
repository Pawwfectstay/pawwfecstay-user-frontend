const TestimonialRating = () => {
  return (
    <>
      <h2 className="text-30 text-white">
        Trusted by Pet Parents
        <br /> Across Malaysia
      </h2>
      <p className="text-white mt-20">
        Join thousands of happy pet owners who trust us with their beloved companions.
        From premium boarding to professional grooming, we ensure your pets receive
        the best care possible in Kuala Lumpur and Selangor.
      </p>

      <div className="row y-gap-30 text-white pt-60 lg:pt-40">
        <div className="col-sm-4 col-6">
          <div className="text-30 lh-15 fw-600">50k+</div>
          <div className="lh-15">Happy Pets</div>
        </div>
        {/* End .col */}

        <div className="col-sm-4 col-6">
          <div className="text-30 lh-15 fw-600">4.92</div>
          <div className="lh-15">Customer Rating</div>
          <div className="d-flex x-gap-5 items-center pt-10">
            <div className="icon-star text-white text-10" />
            <div className="icon-star text-white text-10" />
            <div className="icon-star text-white text-10" />
            <div className="icon-star text-white text-10" />
            <div className="icon-star text-white text-10" />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-4 col-6">
          <div className="text-30 lh-15 fw-600">100+</div>
          <div className="lh-15">Partner Facilities</div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default TestimonialRating;
