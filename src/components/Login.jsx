import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";

const Login = () => {
const {
  googleSignIn,
  githubSignIn,
  anonymousSignIn,
  emailAndPasswordSignIn} = useContext(AuthContext);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null)
  const [isLoggingIn, setIsLoggingIn] = useState(true)

  async function submitHandler (){
      if (!email || !password) {
          setError('Please enter email and password')
          return
      }

      try {
          await emailAndPasswordSignIn(email, password)
      } catch (e) {
          setError('Incorrect email or password')
      }
      return

  };
  return (
    <div>
      <h2>Login</h2>
      {error && <div className='w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2'>{error}</div>}
      <hr />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <hr />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <hr />
      <button onClick={submitHandler}>Sign in with Email and Password</button>
      <hr />
      <button onClick={anonymousSignIn}>Sign in Anonymously</button>
      <hr />
      <button onClick={googleSignIn}>Sign in with Google</button>
      <hr />
      <button onClick={githubSignIn}>Sign in with GitHub</button>
    </div>
  );
};

export default Login;
