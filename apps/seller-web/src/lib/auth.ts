import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@repo/db/client";
import type { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      const seller = await prisma.user.findUnique({
        where: {
          id: token.sub as string,
        },
      });
      if (seller) {
        session.user = {
          ...session.user,
          id: seller.id,
          name: seller.name,
          email: seller.email,
        };
      }

      return session;
    },
  },
};
