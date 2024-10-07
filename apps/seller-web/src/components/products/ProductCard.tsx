import Image from "next/image";
import React from "react";

interface ProductCardProps {
  name: string;
  description: string;
  amount: number;
  currency: string;
  imagePreview: string | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  amount,
  currency,
  imagePreview,
}) => {
  return (
    <div className="max-w-sm mx-auto p-6 rounded-lg border border-b-2 border-zinc-900">
      {/* Product Image */}
      <div className="rounded-lg overflow-hidden mb-4">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Product Image"
            className="w-[400px] h-[400px] object-cover rounded-lg"
          />
        ) : (
          <Image
            src="/.png" // Default image
            alt="Product Image"
            width={400}
            height={400}
            className="rounded-lg"
          />
        )}
      </div>

      {/* Product Link */}
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-gray-500 text-sm">buyinablink.xyz</span>
      </div>

      {/* Product Title */}
      <h1 className="text-lg font-semibold mb-2">{name}</h1>

      {/* Product Description */}
      <p className="text-sm mb-4">{description}</p>

      {/* Buy Button with Amount and Currency */}
      <button className="bg-black text-white w-full py-3 rounded-lg font-semibold">
        Buy ({amount} {currency})
      </button>
    </div>
  );
};

export default ProductCard;
