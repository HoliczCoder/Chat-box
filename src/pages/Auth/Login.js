import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const _doLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem("user", JSON.stringify(resp.user));
      navigate('/home');
    } catch (e) {
      console.log(e);
    }
  };
  return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="Username" onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-6">
          <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" onChange={e=>setPassword(e.target.value)}/>
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" onClick={_doLogin}>
            Sign In
          </button>
          <Link className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" to={'/signup'}>
            Sign Un
          </Link>
          <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
  );
}
