import axios from "axios";
import ProductCard from "@/components/ProductCard";

export default async function CategoryPage({ params }) {
  const { category } = params;
  const respond = await axios.get(
    `https://dummyjson.com/products/category/${category}`
  );
  const products = respond.data.products;

  return (
    <div className="p-6">
      <h1 className="category-titles">{category}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
