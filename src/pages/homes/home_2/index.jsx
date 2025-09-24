
import Brand2 from "@/components/brand/Brand2";
import Footer2 from "@/components/footer/footer-2";
import Header2 from "@/components/header/header-2";
import Hero2 from "@/components/hero/hero-2";
import AppBanner from "@/components/home/home-2/AppBanner";
import BlockGuide from "@/components/home/home-2/BlockGuide";
import CallToActions from "@/components/home/home-2/CallToActions";
import Subscribe from "@/components/home/home-2/Subscribe";
import Testimonial from "@/components/home/home-2/Testimonial";
import TestimonialRating from "@/components/home/home-2/TestimonialRating";
import Facilities from "@/components/home/home-2/Facilities";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "PawwfecStay",
  description: "PetBooking",
};

const Home_2 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <Header2 />
      {/* End Header 2 */}

      <Hero2 />
      {/* End Hero 2 */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 sm:y-gap-10 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section>
      {/* End pet care services block sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Featured Pet Boarding Services
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Discover top-rated pet care facilities near you
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-places-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination -dots text-border js-places-pag" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-places-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <Facilities />
          {/* End travellers component */}
        </div>
        {/* End .container */}
      </section>
      {/* End Featured Pet Boarding Services Section */}

      <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row justify-center text-center pt-60">
            <div className="col-auto">
              <div className="text-15 lh-1 text-white">
                Trusted by Pet Parents Everywhere
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="px-40 md:px-0">
            <div className="row y-gap-30 justify-between items-center pt-60 lg:pt-40">
              <Brand2 />
            </div>
          </div>
        </div>
      </section>
      {/* End testimonial and brand sections Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Why Choose PawwfectStay?
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Your pets deserve the best care while you're away
                </p>
              </div>
            </div>
          </div>
          {/* End .row  */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us Section */}

      <Subscribe />
      {/* End Subscribe Section */}

      {/* <AppBanner /> */}
      {/* End AppBanner Section */}

      <CallToActions />
      {/* End CallToActions Section */}

      <Footer2 />
      {/* End Footer Section */}
    </>
  );
};

export default Home_2;
