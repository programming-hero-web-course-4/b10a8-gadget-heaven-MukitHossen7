import { useLoaderData, useParams } from "react-router-dom";
import CategoriesBtn from "../components/CategoriesBtn/CategoriesBtn";
import { useContext, useEffect, useState } from "react";
import { ProductsData } from "../Layouts/MainLayouts";
import Card from "../components/Card/Card";
import HomeNav from "../components/HomeNav/HomeNav";
import Banner from "../components/Banner/Banner";
import BannerImg from "../components/BannerImg/BannerImg";

const Home = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const categories = useLoaderData();
  const { category } = useParams();
  const { products } = useContext(ProductsData);
  useEffect(() => {
    if (products) {
      if (category === "all-products") {
        setCategoryProduct(products);
        return;
      } else {
        if (category) {
          const filterData = products.filter(
            (product) => product.category === category
          );

          setCategoryProduct(filterData);
        } else {
          setCategoryProduct(products.slice(0, 9));
        }
      }
    }
    document.title = "Home Page";
  }, [products, category]);

  return (
    <div>
      <div className="border-2 rounded-3xl  border-gray-500 p-2 mt-4">
        <div className="bg-[#9538E2] px-0 lg:px-7  rounded-3xl   pb-52 relative">
          <HomeNav></HomeNav>
          <Banner></Banner>
          <BannerImg></BannerImg>
        </div>
      </div>

      <div className="mt-20 lg:mt-80">
        <h2 className="font-bold text-2xl lg:text-3xl text-center pb-10">
          Explore Cutting-Edge Gadgets
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[20%]  bg-white p-5 max-h-96 rounded-xl shadow-xl">
            <CategoriesBtn categories={categories}></CategoriesBtn>
          </div>

          <div className="w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProduct.map((product) => (
              <Card key={product.product_id} product={product}></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
