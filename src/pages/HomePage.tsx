import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-wrap container mx-auto gap-3 mt-10 justify-center">
        {[...Array(12)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
