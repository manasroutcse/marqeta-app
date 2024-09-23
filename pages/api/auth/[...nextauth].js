// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// export default NextAuth({
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   pages: {
//     signIn: "/signin",
//   },
// });


// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as any;
        // Here is where you can validate the email/password and make the appropriate calls to a database or external service.
        const user = await fetch("your-api-endpoint/authenticate", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        });

        const userInfo = await user.json();

        if (user.ok && userInfo) {
          return userInfo;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
  },
});
