import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";



const ProductsHome = async () => {
  try {
    const products = await getProducts();
    console.log(products);

    return (
      <div className="flex flex-col items-center gap-10 py-8 px-5">
        <p className="text-heading1-bold text-center">Products</p>
        {!products || products.length === 0 ? (
          <p className="text-heading1-bold text-center">No products found</p>
        ) : (
          <div className="flex flex-wrap justify-center mx-auto gap-16">
            {products.slice(0, 12).map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error in ProductsHome:', error);

    return (
      <div className="flex flex-col items-center gap-10 py-8 px-5">
        <p className="text-heading1-bold text-center">Products</p>
        <p className="text-heading1-bold text-center">Error loading products</p>
      </div>
    );
  }
};

export default ProductsHome;

  


  