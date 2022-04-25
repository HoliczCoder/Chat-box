import React, { useState } from "react";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const _doLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      console.log(resp.user);
      sessionStorage.setItem("user", JSON.stringify(resp.user));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div onSubmit={_doLogin}>
      <form>
        <input
          type="text "
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="text "
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
}
