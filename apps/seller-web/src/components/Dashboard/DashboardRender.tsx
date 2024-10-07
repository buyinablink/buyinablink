import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Chart from "./ChatBar";

function DashBoardRender() {
  return (
    <>
      <div className="flex flex-col text-white">
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 md:gap-8">
          <div className="min-w-[1200px] mx-28">
            <div className="flex flex-col p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Expected Revenue</CardTitle>
                    <CardDescription className="text-4xl font-bold">
                      ${10} SOL
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowUpIcon className="h-4 w-4 fill-primary" />
                      <span>Last 7 days Revunue</span>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Today&apos;s Order</CardTitle>
                    <CardDescription className="text-4xl font-bold">
                      {0}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div
                      className="flex items-center gap-2 text-sm 
                  "
                    >
                      <ArrowUpIcon className="h-4 w-4 fill-primary" />
                      <span>+10% from last Day</span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <div className="p-2 mt-4">
                <Chart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default DashBoardRender;

function ArrowUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function MoveHorizontalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
