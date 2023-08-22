'use client';
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth/AuthContext";

const Login = () => {
  const { googleSignIn, githubSignIn, emailAndPasswordSignIn, anonymousSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Login</h2>
      <button onClick={googleSignIn}>Sign in with Google</button>
      <button onClick={githubSignIn}>Sign in with GitHub</button>

      <form onSubmit={emailAndPasswordSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in with Email and Password</button>
      </form>

      <button onClick={anonymousSignIn}>Sign in Anonymously</button>
    </div>
  );
};

export default Login;
