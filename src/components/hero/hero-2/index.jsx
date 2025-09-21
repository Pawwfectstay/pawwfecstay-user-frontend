import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import MainFilterSearchBox from "./MainFilterSearchBox";
import { memo, useCallback } from 'react';

// Memoized tab button component
const TabButton = memo(({ tab, isActive, onClick }) => (
  <button
    className={`tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-white js-tabs-button ${
      isActive ? "is-tab-el-active" : ""
    }`}
    onClick={onClick}
  >
    <i className={`${tab.icon} text-20 mr-10 sm:mr-5`}></i>
    {tab?.name}
  </button>
));

const Index = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();

  // Memoize tab click handler
  const handleTabClick = useCallback((tabName) => {
    dispatch(addCurrentTab(tabName));
  }, [dispatch]);

  return (
    <section className="masthead -type-2 z-2">
      <div className="masthead__bg bg-dark-3">
        <img alt="image" src="/img/masthead/2/bg.png" className="js-lazy" />
      </div>
      {/* End bg image */}

      <div className="container">
        <div className="masthead__tabs">
          <div className="tabs -bookmark-2 js-tabs">
            <div className="tabs__controls d-flex items-center js-tabs-controls">
              {tabs?.map((tab) => (
                <TabButton
                  key={tab?.id}
                  tab={tab}
                  isActive={tab?.name === currentTab}
                  onClick={() => handleTabClick(tab?.name)}
                />
              ))}
            </div>
          </div>
          {/* End tabs */}
        </div>
        {/* End .masthead__tabs */}

        <div className="masthead__content">
          <div className="row y-gap-40">
            <div className="col-xl-5" data-aos="fade-up" data-aos-offset="0">
              <h1 className="z-2 text-60 lg:text-40 md:text-30 text-white pt-80 xl:pt-0">
                <span className="text-yellow-1">Find the Perfect</span>
                <br />
                Pet Sitter Near You
              </h1>
              <p className="z-2 text-white mt-20">
                Trusted pet care for when you're away. Book experienced sitters in your area.
              </p>

              <MainFilterSearchBox />

              {/* End filter content */}
            </div>
            {/* End .col */}

            <div className="col-xl-7">
              <div className="masthead__images relative-1">
                <div data-aos="fade" data-aos-delay="400">
                  <img
                    src="/img/masthead/2/1.png"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
                {/* End left image */}

                <div data-aos="fade" data-aos-delay="600">
                  <img
                    src="/img/masthead/2/2.png"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
                {/* End right top image */}

                <div data-aos="fade" data-aos-delay="800">
                  <img
                    src="/img/masthead/2/3.png"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
                {/* End right bottom image */}
              </div>

              {/* End .masthead__images */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .masthead__content */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default Index;
