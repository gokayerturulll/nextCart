import axios from "axios";
import ProductCard from "@/components/ProductCard";

async function fetchSearchedProducts(query) {
  if (!query) {
    return [];
  }
  try {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
    return response.data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q || "";
  const products = await fetchSearchedProducts(query);

  return (
    <div className="mx-auto px-4 py-8 pt-[120px]">
      {query ? (
        <>
          <h1 className="text-3xl font-bold mb-6">
            Search Results for: <span className="text-gray-600">"{query}"</span>
          </h1>
          {products.length > 0 ? (
            <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-xl">
              No products found for your search.
            </p>
          )}
        </>
      ) : (
         <h1 className="text-3xl font-bold mb-6 text-center">
            Please enter a search term to find products.
          </h1>
      )}
    </div>
  );
}