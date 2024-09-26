"use client";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Home = () => {
  const session = useSession();

  return (
    <div>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "/",
            redirect: true,
          })
        }
      >
        Signin
      </button>
      <button onClick={() => signOut()}>Sign out</button>
      <div>{JSON.stringify(session.data?.user)}</div>
    </div>
  );
};

export default Home;
