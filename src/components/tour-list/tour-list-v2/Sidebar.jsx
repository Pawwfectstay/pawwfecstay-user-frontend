import CategoryTypes from "../sidebar/CategoryTypes";
import OthersFilter from "../sidebar/OthersFilter";
import Duration from "../sidebar/Duration";
import Languages from "../sidebar/Languages";
import PirceSlider from "../sidebar/PirceSlider";
import MainFilterSearchBox from "./MainFilterSearchBox";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__item -no-border">
        <div className="px-20 py-20 bg-light-2 rounded-4">
          <h5 className="text-18 fw-500 mb-10">Find Pet Boarding</h5>

          <div className="row y-gap-20 pt-20">
            <MainFilterSearchBox />
          </div>
        </div>
      </div>
      {/* End search tours */}

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Room Types</h5>
        <div className="sidebar-checkbox">
          <CategoryTypes />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End room types filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Pet Types</h5>
        <div className="sidebar-checkbox">
          <OthersFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End pet types filter */}

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price Range (RM)</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>
      {/* End price range slider */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Amenities</h5>
        <div className="sidebar-checkbox">
          <Duration />
        </div>
      </div>
      {/* End amenities filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Services</h5>
        <div className="sidebar-checkbox">
          <Languages />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End services filter */}
    </>
  );
};

export default Sidebar;
