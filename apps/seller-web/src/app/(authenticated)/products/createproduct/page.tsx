"use client";
import ProductCard from "@/components/products/ProductCard";
import React, { useState } from "react";

interface CreateProductProps {}

const CreateProduct: React.FC<CreateProductProps> = () => {
  const [name, setName] = useState<string>("Cap");
  const [description, setDescription] = useState<string>(
    "Sellers to sell their goods using blinks, where they can register in our website and make an inventory and they can share their whole inventory using blinks."
  );
  const [amount, setAmount] = useState<number>(1.2);
  const [currency, setCurrency] = useState<"SOL" | "USDC" | "USDT">("SOL");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-6 lg:gap-12 p-8 rounded-xl w-full max-w-6xl border">
        {/* Left side - Form */}
        <div className="border p-3 border-zinc-300 rounded-lg">
          <h2 className="text-xl  mb-4 rounded-lg font-semibold">
            Create Product
          </h2>

          {/* Product Name Input */}
          <div className="mb-4">
            <label className="block mb-2 uppercase font-bold">Name :</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg border border-zinc-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Product Description Input */}
          <div className="mb-4">
            <label className="block  mb-2">Description :</label>
            <textarea
              className="w-full p-2 rounded-lg border border-zinc-600"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Product Amount and Currency */}
          <div className="flex space-x-4 mb-6">
            <input
              type="number"
              className="w-20 p-2 rounded-lg  border border-zinc-600"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
            />
            <button
              className={`px-4 py-2 rounded-lg border ${
                currency === "SOL" ? " bg-zinc-400 " : "border-gray-400"
              }`}
              onClick={() => setCurrency("SOL")}
            >
              SOL
            </button>
            <button
              className={`px-4 py-2 rounded-lg border ${
                currency === "USDC" ? "bg-zinc-400" : "border-gray-400"
              }`}
              onClick={() => setCurrency("USDC")}
            >
              USDC
            </button>
            <button
              className={`px-4 py-2 rounded-lg border ${
                currency === "USDT" ? "bg-zinc-400" : "border-gray-400"
              }`}
              onClick={() => setCurrency("USDT")}
            >
              USDT
            </button>
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block  mb-2">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className=""
            />
          </div>

          <button className="px-6 py-2 rounded-lg bg-green-500">Update</button>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[2px] mx-4"></div>

        {/* Right side - Product Preview */}
        <div className="p-4 rounded-lg shadow-lg w-full max-w-md border">
          <ProductCard
            name={name}
            description={description}
            amount={amount}
            currency={currency}
            imagePreview={imagePreview}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
