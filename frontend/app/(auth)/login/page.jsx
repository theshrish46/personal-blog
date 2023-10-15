"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:8000/auth/login", {
      email,
      password,
    });
    console.log(data);
    localStorage.getItem("token") ? null : localStorage.setItem("token", data);
    router.push("/");
  };

  return (
    <>
      <div className="p-10 shadow-xl rounded-xl">
        <form
          className="flex flex-col justify-center items-start gap-3 h-auto"
          onSubmit={handleClick}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="submit"
            className="mt-2 hover:bg-black hover:text-white outline-none transition-all duration-300"
          />
        </form>
        <Link
          href={"/register"}
          className="text-sm text-blue-500 mt-6 hover:underline"
        >
          New User ? Register
        </Link>
      </div>
    </>
  );
};

export default page;
