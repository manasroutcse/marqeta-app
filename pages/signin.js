// import { providers, signIn, getSession, csrfToken } from "next-auth";
// import styles from "../styles/Signin.module.css";

// function signin({ providers }) {
//   return (
//     <div>
//       {Object.values(providers).map((provider) => {
//         return (
//           <div key={provider.name}>
//             <button onClick={() => signIn(provider.id)}>
//               Sign in with {provider.name}
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default signin;

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const session = await getSession({ req });

//   if (session) {
//     return {
//       redirect: { destination: "/" },
//     };
//   }

//   return {
//     props: {
//       providers: await providers(context),
//       csrfToken: await csrfToken(context),
//     },
//   };
// }

// pages/signin.js
import Link from "next/link";
import Router from "next/router";
import "../styles/Signin.module.css"

import Head from "next/head";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // Continue to another page or perform required actions after successful login.
      // You may store the user's JWT in the client session, using the `next-auth/middleware` in the Next.js API route and Next Auth `getSession` function.
      Router.push("/");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="signinDiv">
        <div className="signinform">
        <form onSubmit={handleSubmit}>
        <h1>Welcome! Please sign in.</h1>
        <label>Email</label><br/>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        
        <label>Password</label><br/>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Next</button>
        <p>
          Don't have an account?{" "}
          <Link href="/signup">
            Sign up Now
          </Link>
        </p>
      </form>
        </div>
      
      </div>
      
    </>
  );
}


// import Link from "next/link";
// const Signin = () => (
//     <>
//       <div>
//         <h2>Signin  page</h2>
//       </div>
//     </>
//   );
  
//   export default Signin;


