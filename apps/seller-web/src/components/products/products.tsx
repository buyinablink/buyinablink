"use client";
import React from "react";
import AddProductButton from "./AddProductButton";
import { useRouter } from "next/navigation";

function Products() {
  const router = useRouter();
  return (
    <div className="p-6 text-black">
      <div className="flex justify-end mb-4">
        <AddProductButton />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[1, 2, 3, 4, 5].map((product) => (
          <div
            key={product}
            className=" p-4 rounded-lg shadow-md flex space-x-4 bg-zinc-200"
          >
            <div className="w-24 h-24 -600 rounded-lg">
              <img src={`https://robohash.org/asdasdasd?set=set4`} alt="" />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl uppercase f font-sans">Cap</h3>
              </div>
              <p className="text-gray-600 font-semibold text-md">
                Product Name{" "}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Date of Created: <span>01.02.2024</span>
              </p>
              <p className=" mt-2">
                Amount: <span>1.2</span> SOL
              </p>
              <div className="mt-4 flex space-x-4">
                <button
                  className="-700  px-4 py-2 rounded-lg border  bg-green-500"
                  onClick={() => {
                    router.push(`products/id`);
                  }}
                >
                  More details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
