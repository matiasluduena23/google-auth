import NextAuth from "next-auth";
import google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [google],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No profile");
      }
      const isAllowedToSignIn = false;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return "/error-user";
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
});
