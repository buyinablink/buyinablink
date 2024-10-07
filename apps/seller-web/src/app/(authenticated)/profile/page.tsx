import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

async function page() {
  const data = await getServerSession(authOptions);
  return <div>{JSON.stringify(data)}</div>;
}

export default page;
