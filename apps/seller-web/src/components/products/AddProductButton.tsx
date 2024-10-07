"use client";
import { useRouter } from "next/navigation";
import React from "react";

function AddProductButton() {
  const router = useRouter();
  return (
    <button
      className="bg-green-600  px-4 py-2 rounded-lg"
      onClick={() => {
        router.push("/products/createproduct");
      }}
    >
      Add Product
    </button>
  );
}

export default AddProductButton;
