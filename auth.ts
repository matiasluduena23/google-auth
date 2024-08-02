import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import prisma from "./lib/db";
import email from "next-auth/providers/email";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [google],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No profile");
      }
      const user = await prisma.user.findFirst({
        where: {
          email: profile.email,
        },
      });
      if (user) {
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            image: profile.picture,
          },
        });
        return true;
      } else {
        // Return false to display a default error message
        return "/error-user";
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async redirect({}) {
      return "/panel";
    },
  },
});
