import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  title: string;
  description: string;
  price: string;
  stock: string;
  imageUrl: string;
  ordersReceived: number;
};

// Function to generate fake product data
const generateFakeProduct = (): Product => ({
  id: "prod-1",
  name: "Eco-Friendly Water Bottle",
  title: "Sustainable Hydration Solution",
  description:
    "Stay hydrated with our sleek, eco-friendly water bottle. Made from recycled materials, this 20oz bottle keeps your drinks cold for up to 24 hours or hot for up to 12 hours. Perfect for outdoor adventures or daily use.",
  price: "$24.99",
  stock: "45",
  imageUrl: "https://picsum.photos/seed/bottle/400/400",
  ordersReceived: 127,
});

export default function SingleProductView() {
  const product = generateFakeProduct();

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="rounded-lg object-cover h-[400px] w-[400px]"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Title</h3>
              <p>{product.title}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Description</h3>
              <p>{product.description}</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Price</h3>
                <p className="text-2xl font-bold text-green-600">
                  {product.price}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Stock</h3>
                <p className="text-xl">{product.stock} units</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Orders Received</h3>
              <Badge variant="secondary" className="text-lg">
                {product.ordersReceived} orders
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
