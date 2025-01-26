import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <div className="px-4 sm:px-10 py-10 flex flex-col items-center gap-10">
      {/* Collection Banner */}
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[300px] sm:h-[400px] object-cover rounded-xl shadow-md"
      />

      {/* Collection Title */}
      <p className="text-3xl font-bold text-gray-800 text-center">
        {collectionDetails.title}
      </p>

      {/* Collection Description */}
      <p className="text-lg text-gray-600 text-center max-w-4xl leading-relaxed">
        {collectionDetails.description}
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {collectionDetails.products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";



