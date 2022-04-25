import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const _doSignup = async (e) => {
        e.preventDefault();
        try {
            const resp = await createUserWithEmailAndPassword(auth, email, password);
            alert("Đăng ký thành công");
            navigate('/login');
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
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" onClick={_doSignup}>
                    Sign Up
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                    Forgot Password?
                </a>
            </div>
        </div>
    );
}
