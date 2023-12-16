import { useEffect, useState } from "react";
import Footer from "../component/Layout/Footer";
import Header from "../component/layout/Header";
import ProductDetail from "../component/products/ProductDetails";
import SuggestedProduct from "../component/Product/SuggestedProduct.jsx";
import { productData } from "../Static/data";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");

  console.log(data);
  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
  }, []);
  return (
    <div>
      <Header />
      <ProductDetail data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
