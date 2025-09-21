import Aos from "aos";
import { useEffect, Suspense, lazy } from "react";
import SrollTop from "./components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

if (typeof window !== "undefined") {
  import("bootstrap");
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
// Lazy load all routes
const Home = lazy(() => import("./pages"));
const Home_2 = lazy(() => import("./pages/homes/home_2"));
const NotFoundPage = lazy(() => import("./pages/not-found"));
const LogIn = lazy(() => import("./pages/others/login"));
const SignUp = lazy(() => import("./pages/others/signup"));
const Terms = lazy(() => import("./pages/others/terms"));
const Invoice = lazy(() => import("./pages/others/invoice"));
const TourListPage2 = lazy(() => import("./pages/tour/tour-list-v2"));
const TourSingleV1Dynamic = lazy(() => import("./pages/tour/tour-single"));
const Contact = lazy(() => import("./pages/others/contact"));

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<div className="preloader">Loading...</div>}>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="home_2" element={<Home_2 />} />

              <Route path="404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />

              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<LogIn />} />
              <Route path="terms" element={<Terms />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="contact" element={<Contact />} />

              <Route path="tour-list-v2" element={<TourListPage2 />} />
              <Route path="tour-single/:id" element={<TourSingleV1Dynamic />} />

            </Route>
          </Routes>
          </Suspense>
          <ScrollTopBehaviour />
        </BrowserRouter>

        <SrollTop />
      </Provider>
    </main>
  );
}

export default App;
