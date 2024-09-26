import { ActionsJson, createActionHeaders } from "@solana/actions";

const headers = createActionHeaders({
  chainId: "devnet",
});

export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      {
        apiPath: "/api/actions/*",
        pathPattern: "/*",
      },
    ],
  };

  return Response.json(payload, {
    headers,
  });
};

export const OPTIONS = GET;
