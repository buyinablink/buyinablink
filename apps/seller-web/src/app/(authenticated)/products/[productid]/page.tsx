import ProductCard from "@/components/products/ProductCard";
import SingleProductView from "@/components/products/SingleProductView";
import React from "react";

function page() {
  return (
    <div className="flex justify-center items-center h-[700px]">
      <SingleProductView />
    </div>
  );
}

export default page;
