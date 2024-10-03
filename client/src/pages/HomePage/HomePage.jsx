import Hero from "../../components/Hero/Hero.jsx";
import Products from "../../components/Products/Products.jsx";

const HomePage = ({ addFlower, flowerBasket }) => {
  return (
    <>
      <Hero />

      <Products addFlower={addFlower} flowerBasket={flowerBasket} />
    </>
  );
};

export default HomePage;
