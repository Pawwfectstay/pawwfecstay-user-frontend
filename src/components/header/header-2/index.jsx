import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu";
import { userApi } from "@/api";

const Header1 = () => {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState(null);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    // Add scroll listener
    window.addEventListener("scroll", changeBackground);

    // Check for user data in session
    const userData = sessionStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await userApi.logout();
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <header className={`header ${navbar ? "bg-dark-1 is-sticky" : ""}`}>
        <div className="header__container container">
          <div className="row justify-between items-center">
            <div className="col-auto mobile-col">
              <div className="d-flex items-center">
                <div className="mr-20 d-flex items-center">
                  <div className="mr-15 d-none md:d-flex">
                    <Link
                      to="/login"
                      className="icon-user text-inherit text-22 text-white"
                    />
                  </div>
                  {/* End mobile menu icon */}

                  <button
                    className="d-flex items-center icon-menu text-white text-20"
                    data-bs-toggle="offcanvas"
                    aria-controls="mobile-sidebar_menu"
                    data-bs-target="#mobile-sidebar_menu"
                  ></button>
                  {/* Start mobile menu icon */}

                  <div
                    className="offcanvas offcanvas-start  mobile_menu-contnet"
                    tabIndex="-1"
                    id="mobile-sidebar_menu"
                    aria-labelledby="offcanvasMenuLabel"
                    data-bs-scroll="true"
                  >
                    <MobileMenu />
                    {/* End MobileMenu */}
                  </div>
                </div>
                {/* End mobile humberger menu */}

                <Link to="/" className="header-logo mr-20">
                  {/* <img src="/img/general/logo-light-2.svg" alt="logo icon" />
                  <img src="/img/general/logo-dark.svg" alt="logo icon" /> */}
                  <h1 className="text-white text-22">PawwfectStay</h1>
                </Link>
                {/* End logo */}

              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">

                {/* Start btn-group */}
                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                  {user ? (
                    <div className="d-flex items-center">
                      <span className="text-white mr-20">
                        Welcome, {user.first_name} {user.last_name}
                      </span>
                      <button
                        onClick={handleLogout}
                        className="button px-30 fw-400 text-14 -white bg-white h-50 text-dark-1"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="button px-30 fw-400 text-14 -white bg-white h-50 text-dark-1"
                      >
                        Become An Expert
                      </Link>
                      <Link
                        to="/signup"
                        className="button px-30 fw-400 text-14 border-white -outline-white h-50 text-white ml-20"
                      >
                        Sign In / Register
                      </Link>
                    </>
                  )}
                </div>
                {/* End btn-group */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
    </>
  );
};

export default Header1;
