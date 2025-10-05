"use client";

import React from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
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

const chartData = [
  { MaterialCode: "Air", desktop: 177691 },
  { MaterialCode: "AG3A", desktop: 80311 },
  { MaterialCode: "AG2A", desktop: 80377 },
  { MaterialCode: "Semen", desktop: 784026 },
  { MaterialCode: "Others", desktop: 472335 },
  { MaterialCode: "AG2A22", desktop: 80377 },
  { MaterialCode: "Semeasdn", desktop: 784026 },
  { MaterialCode: "Otherasds", desktop: 472335 },
  ,
];
const chartConfig = {
  desktop: {
    label: "Qty",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function DashboardChart() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Bar Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="MaterialCode"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} barSize={50}>
              <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground leading-none">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter> */}
    </Card>
  );
}
