"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps ) => {

  const imageSrc = product.media?.[0] || "/fallback.jpg"; 
  return (
    <Link
  href={`/products/${product._id}`}
  className="block max-w-sm w-full bg-slate-200 rounded-lg shadow-md overflow-hidden"
>
  <div className="h-[300px] w-full relative">
    {imageSrc ? (
      <Image
        src={imageSrc}
        alt={product.title || "Product Image"}
        layout="fill"
        objectFit="cover"
        className="rounded-t-lg h-auto"

      />
    ) : (
      <div className="h-full w-full bg-gray-200" />
    )}
  </div>
  <div className="p-4">
    <p className="text-lg font-bold">{product.title}</p>
    <p className="text-sm text-gray-500">{product.category}</p>
    <div className="flex justify-between items-center mt-2">
      <span className="text-lg font-semibold text-body-bold">
        {new Intl.NumberFormat("en-ZA", {
          style: "currency",
          currency: "ZAR",
        }).format(product.price)}
      </span>
      <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
    </div>
  </div>
</Link>

  );
};

export default ProductCard;
