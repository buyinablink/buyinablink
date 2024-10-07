"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  orders: {
    label: "Orders",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface DailyOrderCount {
  date: string;
  orders: number;
}

interface SellerOrderSummary {
  totalOrders: number;
  dailyCounts: DailyOrderCount[];
}

const sampleData: SellerOrderSummary = {
  totalOrders: 145,
  dailyCounts: [
    { date: "2024-03-01", orders: 15 },
    { date: "2024-03-02", orders: 22 },
    { date: "2024-03-03", orders: 18 },
    { date: "2024-03-04", orders: 25 },
    { date: "2024-03-05", orders: 30 },
    { date: "2024-03-06", orders: 20 },
    { date: "2024-03-07", orders: 15 },
  ],
};

export default function OrderSummaryChart({
  data = sampleData,
}: {
  data?: SellerOrderSummary;
}) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <Card className="w-full  mx-auto">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
        <CardDescription>Last 7 Days</CardDescription>
      </CardHeader>
      <CardContent className="h-[400px]">
        {data.totalOrders > 0 ? (
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart accessibilityLayer data={data.dailyCounts}>
              <CartesianGrid vertical={false} stroke="hsl(var(--border))" />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={formatDate}
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis
                dataKey="orders"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                stroke="hsl(var(--muted-foreground))"
              />
              <ChartTooltip
                cursor={{ fill: "hsl(var(--muted))" }}
                content={<ChartTooltipContent />}
              />
              <Bar
                dataKey="orders"
                fill="hsl(var(--chart-1))"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        ) : (
          <div className="flex h-full items-center justify-center text-center">
            <p className="text-lg text-muted-foreground">
              There are no orders in the last 7 days.
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {data.totalOrders > 0 ? (
          <>
            <div className="flex items-center gap-2 font-medium leading-none">
              Total Orders: {data.totalOrders}
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing daily order counts for the last 7 days
            </div>
          </>
        ) : (
          <div className="leading-none text-muted-foreground">
            Check back later for order statistics
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
