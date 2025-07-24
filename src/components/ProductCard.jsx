import Link from "next/link";
export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="grid-card">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="card-img"
        />

        <div className="product-info">
          <h3 className="text-white font-semibold text-center">
            {product.title}
          </h3>
          <p className="text-gray-200">{product.price} $</p>
        </div>
      </div>
    </Link>
  );
}
