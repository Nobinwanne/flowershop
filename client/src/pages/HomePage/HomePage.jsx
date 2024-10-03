import Hero from "../../components/Hero/Hero.jsx";
import Products from "../../components/Products/Products.jsx";

const HomePage = ({ addFlower }) => {
  return (
    <>
      <Hero />
      <Products addFlower={addFlower} />
    </>
  );
};

export default HomePage;
