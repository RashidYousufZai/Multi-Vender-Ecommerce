import Header from "../component/layout/Header";
import Hero from "../component/Route/Hero/Hero.jsx"
import Categories from "../component/Route/Categories/Categories.jsx";
import BestDeals from "../component/Route/BestDeals/BestDeals.jsx";
import FeaturedProduct from "../component/Route/FeaturedProduct/FeaturedProduct.jsx";
import Events from "../component/Events/Events.jsx";
import Sponsored from "../component/Route/Sponsored.jsx";
import Footer from "../component/Layout/Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero/>
      <Categories/>
      <BestDeals/>
      <FeaturedProduct/>
      <Events/>
      <Sponsored/>
      <Footer/>
    </div>
  );
};

export default HomePage;
